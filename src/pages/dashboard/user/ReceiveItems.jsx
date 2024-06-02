import BreadCum from "../../../components/dashboard/BreadCum";
import TableWithHeader from "../../../components/dashboard/TableWithHeader";
import useGetPurchaseByUser from "../../../hooks/useGetPurchaseByUser";

const ReceiveItems = () => {
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
      field: "Price",
    },
    {
      id: 5,
      field: "Quantity",
    },
    {
      id: 6,
      field: "Total Amount",
    },
    {
      id: 7,
      field: "Delivery Status",
    },
    {
      id: 8,
      field: "Payment Status",
    },
  ];

  const [purchaseItems] = useGetPurchaseByUser();
  const receiveItems = purchaseItems?.filter(
    (item) => item.delivery === "success"
  );
  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Purchase Items"} />
      <TableWithHeader
        data={receiveItems || []}
        tHeadData={tHeadData}
        show={"userPurchaseItems"}
      />
    </div>
  );
};

export default ReceiveItems;
