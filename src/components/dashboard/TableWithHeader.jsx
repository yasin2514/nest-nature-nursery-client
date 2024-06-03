import { useMemo, useState } from "react";
import TableHeaderComponent from "./TableHeaderComponent";
import TableComponent from "./TableComponent";

const TableWithHeader = ({ tHeadData, data, show }) => {
  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState(
    show === "paymentInfoUser"
      ? "Delivery Status"
      : show === "userList"
      ? "Select Role"
      : "Select Category"
  );

  // Extract unique categories from products
  const uniqueCategories = useMemo(() => {
    const categories = data?.map(
      (product) => product?.category || product?.role || product?.delivery
    );
    return [
      show === "paymentInfoUser"
      ? "Delivery Status"
      : show === "userList"
      ? "Select Role"
      : "Select Category",
      ...new Set(categories),
    ];
  }, [data, show]);

  // Filter products based on search text and selected category and delivery status
  const filteredProducts = useMemo(() => {
    return data?.filter((item) => {
      const matchesSearchText =
        item?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        item?.paymentId?.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory =
        searchCategory === "Select Category" ||
        searchCategory === "Select Role" ||
        searchCategory === "Delivery Status" ||
        item?.category === searchCategory ||
        item?.role === searchCategory ||
        item?.delivery === searchCategory;

      return matchesSearchText && matchesCategory;
    });
  }, [data, searchText, searchCategory]);

  // Pass the props to the TableHeaderComponent
  const props = {
    data: filteredProducts || [],
    setSearchText,
    setSearchCategory,
    uniqueCategories,
    show,
  };
  return (
    <div className="bg-white p-5 mt-5 rounded-lg ">
      <TableHeaderComponent {...props} />
      <div className="h-[calc(100vh-278px)] overflow-auto">
        <TableComponent
          tHeadData={tHeadData}
          data={filteredProducts}
          show={show}
        />
      </div>
    </div>
  );
};

export default TableWithHeader;
