import { IoMdSearch } from "react-icons/io";

const TableHeaderComponent = ({
  products,
  setSearchText,
  setSearchCategory,
}) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <select
          name="select"
          className="custom-input"
          onChange={(e) => setSearchCategory(e.target.value)}
        >
            <option value="Select Category">Select Category</option>
          {products?.map((product, index) => {
            return (
              <option key={index} value={product?.category}>
                {product?.category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="text-xl text-green-500 font-semibold">
        Total Plants: {products?.length}
      </div>
      <div className="relative">
        <input
          type="text"
          className="custom-input "
          name="search"
          id="search"
          placeholder="Search by name"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IoMdSearch className="absolute right-2 text-gray-500 top-4 " />
      </div>
    </div>
  );
};

export default TableHeaderComponent;
