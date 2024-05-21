import { NavLink } from "react-router-dom";

const SideBarComponent = ({data,settingPath}) => {
    return (
      <div className="flex flex-col justify-between mt-10 px-7 h-[calc(100vh-110px)]">
        <div className="flex flex-col items-start  gap-4 ">
          {data?.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#33ff5f] text-[17px] "
                  : "text-[#ffffff]  text-[17px] hover:text-[#33ff5f]"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto mb-5">
          <NavLink
            to={settingPath}
            className="mt-auto text-[#ffffff]  text-[17px] hover:text-[#33ff5f]"
          >
            Setting
          </NavLink>
        </div>
      </div>
    );
};

export default SideBarComponent;