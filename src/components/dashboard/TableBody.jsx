import UserPendingItemsTable from "./UserPendingItemsTable";
import UserListAdminTable from "./UserListAdminTable";
import AdminProductListTable from "./AdminProductListTable";
import UserPurchaseItemsTable from "./UserPurchaseItemsTable";
import PaymentInfoTable from "./PaymentInfoTable";

const TableBody = ({ data, index, show }) => {
  return (
    <>
      {(show === "adminList" ||
        show === "myList" ||
        show === "pendingOrders") && (
        <AdminProductListTable data={data} index={index} show={show} />
      )}
      {show === "userList" && <UserListAdminTable data={data} index={index} />}
      {show === "userPendingItems" && (
        <UserPendingItemsTable data={data} index={index} />
      )}
      {show === "userPurchaseItems" && (
        <UserPurchaseItemsTable data={data} index={index} />
      )}
      {
        show === "paymentInfo" && (
          <PaymentInfoTable data={data} index={index} />
        )
      }
    </>
  );
};

export default TableBody;
