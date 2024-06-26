import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="text-center bg-gray-100 h-screen">
      <div className="flex items-center justify-center  h-[90vh]">
        <div className="space-y-4">
          <p className="text-7xl font-bold text-red-500">{error.status}</p>
          <p className="text-4xl font-medium">{error?.statusText}</p>
        </div>
      </div>
      <Link className="button-green" to={"/"}>
        Back To Home Page
      </Link>
    </div>
  );
};

export default Error;
