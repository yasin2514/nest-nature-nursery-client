import { IoMdSearch } from "react-icons/io";
import BreadCum from "../../../components/dashboard/BreadCum";
import TableComponent from "../../../components/dashboard/TableComponent";
import useGetProducts from "../../../hooks/useGetProducts";
import TableHeaderComponent from "../../../components/dashboard/TableHeaderComponent";
import { useMemo, useState } from "react";

const AdminProductList = () => {
  const tHeadData = [
    {
      id: 1,
      field: "SL",
    },
    {
      id: 2,
      field: "Image",
    },
    {
      id: 3,
      field: "Name",
    },
    {
      id: 4,
      field: "Category",
    },
    {
      id: 5,
      field: "Price",
    },
    {
      id: 6,
      field: "Quantity",
    },
    {
      id: 7,
      field: "Uploaded By",
    },
    {
      id: 8,
      field: "Actions",
    },
  ];

  const [products] = useGetProducts();
  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState("Select Category");

  // Extract unique categories from products
  const uniqueCategories = useMemo(() => {
    const categories = products?.map((product) => product?.category);
    return ["Select Category", ...new Set(categories)];
  }, [products]);

  // Filter products based on search text and selected category
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearchText = item?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesCategory =
        searchCategory === "Select Category" ||
        item?.category === searchCategory;
      return matchesSearchText && matchesCategory;
    });
  }, [products, searchText, searchCategory]);

  // Pass the props to the TableHeaderComponent
  const props = {
    data: filteredProducts,
    setSearchText,
    setSearchCategory,
    uniqueCategories,
  };

  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"Product List"} />

      <div className="bg-white p-5 mt-5 rounded-lg ">
        <TableHeaderComponent {...props} />
        <div className="h-[calc(100vh-278px)] overflow-auto">
          <TableComponent tHeadData={tHeadData} data={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default AdminProductList;
