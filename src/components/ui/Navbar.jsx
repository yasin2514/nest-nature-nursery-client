import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define your navigation links
  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/about", name: "Plant Category" },
    { to: "/services", name: "All Plants" },
    { to: "/services", name: "Dashboard" },
    { to: "/services", name: "ContactUs" },
  ];

  return (
    <nav className="bg-[#01352c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-[75px] items-center">
          <div className="flex items-center">
            <NavLink to="/">
              <img className="h-[50px]" src={logo} alt="NestNatureNursery" />
            </NavLink>
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-9">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? " text-[#33ff5f] text-[17px] "
                    : "text-[#ffffff]  text-[17px] hover:text-[#33ff5f]"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="" aria-label="Toggle menu">
              {isOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <RiMenu4Line className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? " text-[#33ff5f] text-[17px]  block px-3 py-1"
                    : "text-[#ffffff]  text-[17px] hover:text-[#33ff5f] block px-3 py-1"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="mt-3 px-2 space-y-1">
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
