import { Link } from "react-router-dom";
import LoginAndLogout from "../ui/LoginAndLogout";

const Header = () => {
  return (
    <div className="h-[70px] bg-[#01352c] text-white flex justify-between items-center px-7">
      <div className="flex gap-5">
        <h1>Header</h1>
        <Link to={"/"} className="hover:text-[#33ff5f]">
          Home
        </Link>
      </div>
      <div>
        <LoginAndLogout className="flex" />
      </div>
    </div>
  );
};

export default Header;
