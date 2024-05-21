import { Link } from "react-router-dom";
import LoginAndLogout from "../ui/LoginAndLogout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Header = ({ collapse, toggleCollapse }) => {
  return (
    <div className="h-[70px] bg-[#01352c] text-white flex justify-between items-center px-7">
      <div className="flex items-center gap-5">
        <span className="cursor-pointer" onClick={toggleCollapse}>
          {!collapse ? (
            <FaArrowRight className="hover:text-[#33ff5f] text-xl" />
          ) : (
            <FaArrowLeft className="hover:text-[#33ff5f] text-xl" />
          )}
        </span>
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
