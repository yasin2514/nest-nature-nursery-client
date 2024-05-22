import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarComponent = ({ data, settingPath }) => {
  const [openIndices, setOpenIndices] = useState({});

  const handleToggle = (index) => {
    setOpenIndices((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex flex-col justify-between mt-10 px-7 h-[calc(100vh-110px)]">
      <div className="flex flex-col items-start gap-4">
        {data?.map((link, index) => (
          <div key={index} className="w-full">
            <div
              onClick={() => handleToggle(index)}
              className={`cursor-pointer flex items-center justify-between   ${
                !link.to &&
                "text-white    hover:bg-green-800 px-2 py-1 rounded "
              }`}
            >
              {link.to ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-800 px-2 py-1 rounded text-[17px] w-full "
                      : "text-[#ffffff]  hover:bg-green-800 px-2 py-1 rounded w-full text-[17px] "
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <div className="text-[#ffffff] text-[17px]">{link.name}</div>
              )}
              {link.child && link.child.length > 0 && (
                <span
                  className={`ml-2 ${
                    openIndices[index] ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  ▼
                </span>
              )}
            </div>
            {link.child && link.child.length > 0 && openIndices[index] && (
              <div className="pl-4 flex flex-col items-start gap-2 mt-2">
                {link.child.map((childLink, childIndex) => (
                  <NavLink
                    key={childIndex}
                    to={childLink.to}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-green-800  px-2 py-1 rounded text-[15px] w-full "
                        : "text-[#ffffff]  hover:bg-green-800 px-2 py-1 rounded w-full text-[15px] "
                    }
                  >
                    {childLink.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-auto mb-5 flex flex-col ">
        <NavLink
          to={settingPath}
          className={({ isActive }) =>
            isActive
              ? "bg-green-800  px-2 py-1 rounded text-[17px] w-full "
              : "text-[#ffffff]  hover:bg-green-800 px-2 py-1 rounded w-full text-[17px] "
          }
        >
          Setting
        </NavLink>
      </div>
    </div>
  );
};

export default SideBarComponent;
