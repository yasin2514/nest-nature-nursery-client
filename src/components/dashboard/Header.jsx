import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[75px] bg-[#01352c] text-white">
      <div className="flex gap-5">
        <h1>Header</h1>
        <Link to={"/"} className="hover:text-[#33ff5f]">
          Home
        </Link>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Header;
