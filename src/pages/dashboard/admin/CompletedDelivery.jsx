import BreadCum from "../../../components/dashboard/BreadCum";
import TableWithHeader from "../../../components/dashboard/TableWithHeader";
import useGetPaymentInfo from "../../../hooks/useGetPaymentInfo";

const CompletedDelivery = () => {
  const tHeadData = [
    {
      id: 1,
      field: "SL",
    },
    {
      id: 2,
      field: "Payment ID",
    },
    {
      id: 3,
      field: "Amount",
    },
    {
      id: 4,
      field: "Payment Status",
    },
    {
      id: 5,
      field: "Payment Date",
    },
    {
      id: 6,
      field: "Delivery Status",
    },
    {
      id: 7,
      field: "Action",
    },
  ];
  const [paymentData] = useGetPaymentInfo();
  const completedDeliveryData = paymentData?.filter(
    (item) => item?.delivery === "Success"
  );

  return (
    <div>
      <BreadCum text1={"User Dashboard"} text2={"Completed Delivery"} />
      <TableWithHeader
        data={completedDeliveryData || []}
        tHeadData={tHeadData}
        show={"paymentInfoAdmin"}
      />
    </div>
  );
};

export default CompletedDelivery;
