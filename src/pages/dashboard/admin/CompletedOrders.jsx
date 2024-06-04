import BreadCum from '../../../components/dashboard/BreadCum';
import TableWithHeader from '../../../components/dashboard/TableWithHeader';
import useGetPurchaseItem from '../../../hooks/useGetPurchaseItem';

const CompletedOrders = () => {
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
      field: "Payment Method",
    },
    {
      id: 9,
      field: "Payment Status",
    },
  ];
  const [purchaseItems] = useGetPurchaseItem();

    return (
      <div>
        <BreadCum text1={"Admin Dashboard"} text2={"Completed Orders"} />
        <TableWithHeader
          data={purchaseItems || []}
          tHeadData={tHeadData}
          show={"userPurchaseItems"}
        />
      </div>
    );
};

export default CompletedOrders;