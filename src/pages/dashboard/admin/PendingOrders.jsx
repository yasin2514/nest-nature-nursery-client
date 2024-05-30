import BreadCum from "../../../components/dashboard/BreadCum";
import TableWithHeader from "../../../components/dashboard/TableWithHeader";
import useGetCartProducts from "../../../hooks/useGetCartProducts";

const PendingOrders = () => {
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
   
  ];

  const [pendingCart] = useGetCartProducts();
  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"Pending Orders"} />
      <TableWithHeader
        data={pendingCart}
        tHeadData={tHeadData}
        show={"pendingOrders"}
      />
    </div>
  );
};

export default PendingOrders;
