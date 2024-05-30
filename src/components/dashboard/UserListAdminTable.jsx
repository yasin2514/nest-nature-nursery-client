
const UserListAdminTable = ({data,index}) => {
    const {
      name,
      photo,
      email,
      role,
    } = data || {};
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
        <td
          className={`text-center uppercase font-semibold ${
            role === "user" ? "text-green-600" : "text-blue-600 "
          }`}
        >
          {role}
        </td>
        <td className="text-center space-x-3">
          <button
            disabled={role === "admin"}
            className="btn btn-ghost  btn-sm hover:text-blue-700"
          >
            Make Admin
          </button>
          <button
            disabled={role === "admin"}
            className="btn btn-ghost btn-sm hover:text-green-700"
          >
            Make User
          </button>
        </td>
      </tr>
    );
};

export default UserListAdminTable;