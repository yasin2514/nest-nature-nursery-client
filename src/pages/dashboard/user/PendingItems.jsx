import BreadCum from '../../../components/dashboard/BreadCum';
import TableWithHeader from '../../../components/dashboard/TableWithHeader';
import useGetCartDataByUser from '../../../hooks/useGetCartDataByUser';

const PendingItems = () => {
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
  const [userPendingItems] = useGetCartDataByUser();

    return (
      <div>
        <BreadCum text1={"User Dashboard"} text2={"Pending Items"} />
        <TableWithHeader
          data={userPendingItems}
          tHeadData={tHeadData}
          show={"pendingOrders"}
        />
      </div>
    );
};

export default PendingItems;