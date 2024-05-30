import UserPendingItemsTable from "./UserPendingItemsTable";
import UserListAdminTable from "./UserListAdminTable";
import AdminProductListTable from "./AdminProductListTable";

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
    </>
  );
};

export default TableBody;
