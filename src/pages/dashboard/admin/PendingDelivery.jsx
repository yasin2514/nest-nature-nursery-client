import BreadCum from "../../../components/dashboard/BreadCum";
import TableWithHeader from "../../../components/dashboard/TableWithHeader";
import useGetPaymentInfo from "../../../hooks/useGetPaymentInfo";

const PendingDelivery = () => {
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
           return (
             <div>
               <BreadCum text1={"User Dashboard"} text2={"Pending Delivery"} />
               <TableWithHeader
                 data={paymentData || []}
                 tHeadData={tHeadData}
                 show={"paymentInfo"}
               />
             </div>
           );
};

export default PendingDelivery;