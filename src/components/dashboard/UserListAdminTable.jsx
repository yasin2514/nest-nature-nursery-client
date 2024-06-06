import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSuperAdmin from "../../hooks/useSuperAdmin";
import useGetUser from "../../hooks/useGetUser";

const UserListAdminTable = ({ data, index }) => {
  const [isSuperAdmin] = useSuperAdmin();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useGetUser();
  const { name, photo, email, role: userRole, phone } = data || {};

  const handleMakeAdminOrUser = (userEmail, roleValue) => {
    axiosSecure
      .patch(`updateUser/${userEmail}`, { role: roleValue })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Updated successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="flex items-center justify-center">
        <img
          src={photo}
          alt="plant image"
          className="size-12 rounded-full shadow shadow-green-900"
        />
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">{email}</td>
      <td className="text-center">{phone || "-"}</td>
      <td
        className={`text-center uppercase font-semibold ${
          userRole === "user" ? "text-green-600" : "text-blue-600 "
        }`}
      >
        {userRole}
      </td>
      <td className="text-center space-x-3">
        <button
          onClick={() => handleMakeAdminOrUser(email, "admin")}
          disabled={
            isSuperAdmin
              ? userRole === "admin" || userRole === "superAdmin"
                ? true
                : false
              : true
          }
          className="btn btn-ghost  btn-sm hover:text-blue-700"
        >
          Make Admin
        </button>
        <button
          onClick={() => handleMakeAdminOrUser(email, "user")}
          disabled={
            isSuperAdmin
              ? userRole === "user" || userRole === "superAdmin"
                ? true
                : false
              : true
          }
          className="btn btn-ghost btn-sm hover:text-green-700"
        >
          Make User
        </button>
      </td>
    </tr>
  );
};

export default UserListAdminTable;
