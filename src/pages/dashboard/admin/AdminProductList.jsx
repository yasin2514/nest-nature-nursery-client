import BreadCum from "../../../components/dashboard/BreadCum";
import TableComponent from "../../../components/dashboard/TableComponent";

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
  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"Product List"} />

      <div className="bg-white p-5 my-5 rounded-lg">
        <TableComponent tHeadData={tHeadData} />
      </div>
    </div>
  );
};

export default AdminProductList;
