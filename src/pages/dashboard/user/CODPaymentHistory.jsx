import BreadCum from "../../../components/dashboard/BreadCum";
import TableWithHeader from "../../../components/dashboard/TableWithHeader";
import useGetPaymentInfoByUser from "../../../hooks/useGetPaymentInfoByUser";

const CODPaymentHistory = () => {
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
  const [paymentInfo] = useGetPaymentInfoByUser();
  const paymentInfoCOD = paymentInfo.filter(
    (item) => item?.paymentMethod === "COD"
  );

    return (
      <div>
        <BreadCum text1={"User Dashboard"} text2={"COD Payment History"} />
        <TableWithHeader
          data={paymentInfoCOD || []}
          tHeadData={tHeadData}
          show={"paymentInfo"}
        />
      </div>
    );
};

export default CODPaymentHistory;