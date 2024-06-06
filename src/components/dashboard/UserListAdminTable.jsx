import useSuperAdmin from "../../hooks/useSuperAdmin";

const UserListAdminTable = ({ data, index }) => {
  const [isSuperAdmin] = useSuperAdmin();
  const { name, photo, email, role, phone } = data || {};
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
          role === "user" ? "text-green-600" : "text-blue-600 "
        }`}
      >
        {role}
      </td>
      <td className="text-center space-x-3">
        <button
          disabled={
            isSuperAdmin
              ? role === "admin" || role === "superAdmin"
                ? true
                : false
              : true
          }
          className="btn btn-ghost  btn-sm hover:text-blue-700"
        >
          Make Admin
        </button>
        <button
          disabled={
            isSuperAdmin
              ? role === "user" || role === "superAdmin"
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
