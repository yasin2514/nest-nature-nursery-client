import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const TableHeaderComponent = ({
  setSearchText,
  setSearchCategory,
  uniqueCategories,
  data,
  show,
}) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <select
          onChange={(e) => setSearchCategory(e.target.value)}
          className="custom-input"
        >
          {uniqueCategories?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="text-xl text-green-500 font-semibold">
        {show === "userList"
          ? " Total Users: "
          : show === "paymentInfo"
          ? "Total Payments: "
          : show === "paymentInfoAdmin"
          ? "Total Delivery List: "
          : " Total Plants: "}
        {data?.length}
      </div>
      <div className="flex items-center gap-5">
        {show === "userPendingItems" && data?.length > 0 && (
          <div>
            <Link to={"/dashboard/make-all-payment"} className="button-payment">
              {" "}
              Payment ALL
            </Link>
          </div>
        )}
        <div className="relative">
          <input
            type="text"
            className="custom-input "
            name="search"
            id="search"
            placeholder={
              show === "paymentInfoUser" || show === "paymentInfoAdmin"
                ? "Search Payment ID"
                : show === "userList"
                ? "Search User Name"
                : "Search Plant Name"
            }
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IoMdSearch className="absolute right-2 text-gray-500 top-4 " />
        </div>
      </div>
    </div>
  );
};

export default TableHeaderComponent;
