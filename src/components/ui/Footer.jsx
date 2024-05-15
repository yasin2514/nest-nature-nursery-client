import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#01352c] text-gray-300 py-16 px-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:grid grid-cols-[1.3fr_3fr] items-center gap-20 ">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <Link to={"/"}>
                <img src={logo} alt="logo" className=" h-24 " />
              </Link>
            </div>
            <p className="text-[1.2rem] text-gray-300">
              &quot;`Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus natus in nam unde voluptates veritatis atque
              quam.&quot;`
            </p>
          </div>
          <div className="grid mt-6 lg:mt-0 lg:place-content-start grid-cols-2 lg:grid-cols-4 gap-24   place-content">
            <div className="flex flex-col gap-1">
              <h4 className="text-White text-[1.4rem] font-medium">Company</h4>
              <Link to={"/"} className="link link-hover">
                Home
              </Link>
              <Link to={"/allInstructor"} className="link link-hover">
                Plant Category
              </Link>
              <Link to={"/allClasses"} className="link link-hover">
                All Plants
              </Link>
              <Link to={"/contactUs"} className="link link-hover">
                Contact Us
              </Link>
              <Link to={"/login"} className="link link-hover">
                Login
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-White text-[1.4rem] font-medium">Services</h4>
              <a className="link link-hover">Premium Trees</a>
              <a className="link link-hover">Plant Maintenance </a>
              <a className="link link-hover">Tree planting</a>
              <a className="link link-hover">Proper guide</a>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-White text-[1.4rem] font-medium">Terms</h4>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-White text-[1.4rem] font-medium">Contact</h4>
              <a className="link link-hover">Dhaka,Bangladesh</a>
              <a className="link link-hover">015-000-1111</a>

              <span className="flex gap-4 mt-4 text-xl">
                <a className="bg-white rounded-full text-blue-500" href="">
                  <FaFacebook className="text-xl "></FaFacebook>
                </a>
                <a className="text-blue-500" href="">
                  <FaTwitter></FaTwitter>
                </a>
                <a className="bg-white  text-blue-500" href="">
                  <FaLinkedin></FaLinkedin>
                </a>
                <a className="bg-white  text-red-500" href="">
                  <FaInstagramSquare></FaInstagramSquare>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 lg:flex justify-between ">
          <small>
            &copy; {currentYear} The
            <span className="text-[#33ff5f]"> Global Tongues</span> All Rights
            Reserved
          </small>
          <br />
          <small>
            Develop By <span className="text-[#33ff5f]">Yasin Khan Rabbi</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
