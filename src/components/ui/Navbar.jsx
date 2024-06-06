import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import logo from "../../assets/logo.png";
import LoginAndLogout from "./LoginAndLogout";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const noScrollPaths = ["/login", "/register", "/terms"];
    if (noScrollPaths.includes(location.pathname)) {
      setScrolling(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define your navigation links
  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/plant-category", name: "Plant Category" },
    { to: "/all-plants", name: "All Plants" },
    { to: "/dashboard", name: "Dashboard" },
    { to: "/contact-us", name: "ContactUs" },
  ];

  const filteredNav = user
    ? navLinks
    : navLinks.filter((link) => link.to !== "/dashboard");

  return (
    <nav
      className={`fixed top-0 z-[999] w-full bg-[#01352c] ${
        scrolling ? "bg-opacity-100" : "bg-opacity-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-[75px] items-center">
          <div className="flex items-center">
            <NavLink to="/">
              <img className="h-[50px]" src={logo} alt="NestNatureNursery" />
            </NavLink>
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-9">
            {filteredNav?.map((link, index) => (
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
          <LoginAndLogout className="hidden sm:ml-6 sm:flex sm:items-center" />

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
            {filteredNav?.map((link, index) => (
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
            <LoginAndLogout className="mt-3 px-2 space-y-1" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
