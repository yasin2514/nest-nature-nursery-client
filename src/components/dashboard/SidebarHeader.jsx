import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const SidebarHeader = () => {
  return (
    <div className="h-[75px] flex items-center justify-center">
      <NavLink to="/dashboard">
        <img className="w-48" src={logo} alt="NestNatureNursery" />
      </NavLink>
      <h1></h1>
    </div>
  );
};

export default SidebarHeader;
