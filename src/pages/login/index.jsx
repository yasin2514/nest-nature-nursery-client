import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "/public/login.json";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { AuthContext } from "../../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  //   const { googleLogin, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [disabled, setDisabled] = useState(true);

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = {
          email: loggedUser.email,
          name: loggedUser.displayName,
          photo: loggedUser?.photoURL,
          role: "student",
        };
        axios
          .post("https://global-tongues-server.vercel.app/users", saveUser)
          .then((res) => {
            navigate(from, { relative: true });
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onsubmit = (data) => {
    setError(null);
    signIn(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { relative: true });
        reset();
      })
      .catch((error) => setError(error.message));
  };

  const handleDisabled = (e) => {
    if (e.target.value.length > 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero h-screen mt-10  w-full flex  items-center justify-center">
      {/* <PageTitle title={"SignIn"}></PageTitle> */}
      <div className="md:hero-content items-center justify-center lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img src={login} alt="" />
          <Lottie animationData={login} loop={true} />
        </div>

        <div className="card w-full lg:w-1/2  shadow-lg border-2">
          <div className="text-center mt-10 ">
            <button onClick={handleGoogleLogin} className="btn btn-outline">
              <FcGoogle className="text-3xl"></FcGoogle>
            </button>
          </div>
          <div className="divider mx-10 md:mx-32 mt-8 font-bold">
            {" "}
            OR continue With
          </div>

          {/* form start */}
          <form onSubmit={handleSubmit(onsubmit)} className="px-7 py-10 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">email is required</span>
              )}
            </div>
            {/* password */}
            <div className="form-control ">
              <label className="label relative">
                <span className="label-text">Password*</span>
                <span
                  className="absolute top-[50px] text-xl text-gray-500 right-4 link"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </label>
              <input
                onKeyDown={handleDisabled}
                type={show ? "text" : "password"}
                placeholder="Your password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-600 text-sm">
                  password is required
                </p>
              )}
            </div>

            <label className="label">
              <p className="">
                New User?{" "}
                <Link to={"/register"}>
                  <span className="hover:text-blue-600 hover:underline">
                    Register here
                  </span>
                </Link>
              </p>
            </label>

            <div className="form-control">
              <input
                type="submit"
                disabled={disabled}
                className="btn bg-green-800 hover:bg-green-900 text-white"
                value="Sign In"
              />
            </div>

            <div className="text-center">
              <p className="text-red-600">{error}</p>
            </div>
          </form>
          {/* form end */}
        </div>
      </div>
    </div>
  );
};

export default Login;
