import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

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
  // Define your navigation links
  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/plant-category", name: "Plant Category" },
    { to: "/all-plants", name: "All Plants" },
    { to: "/dashboard", name: "Dashboard" },
    { to: "/contact-us", name: "ContactUs" },
  ];

  const filterNavLinks = user
    ? navLinks
    : navLinks.filter((link) => link.name !== "Dashboard");

  // login and logout button
  const loginAndLogoutBtn = user ? (
    <>
      <img
        src={user?.photoURL}
        alt={user?.displayName}
        className="rounded-full w-9 h-9 border mr-5"
      />

      <Link onClick={handleLogout} to={"/login"}>
        <button className="hover:bg-red-600 hover:text-white">LogOut</button>
      </Link>
    </>
  ) : (
    <Link to="/login">
      <button>Login</button>
    </Link>
  );

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
            {filterNavLinks.map((link, index) => (
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
            {loginAndLogoutBtn}
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
            {filterNavLinks.map((link, index) => (
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
            <div className="mt-3 px-2 space-y-1">{loginAndLogoutBtn}</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
