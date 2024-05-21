import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const LoginAndLogout = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Logout Successfully",
        });
      })
      .catch(() => {});
  };
  return (
    <>
      {user ? (
        <>
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-full w-9 h-9 border mr-5"
          />

          <Link onClick={handleLogout} to={"/login"}>
            <button className="hover:bg-red-600 hover:text-white">
              LogOut
            </button>
          </Link>
        </>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </>
  );
};

export default LoginAndLogout;
