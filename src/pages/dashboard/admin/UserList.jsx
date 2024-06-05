import BreadCum from "../../../components/dashboard/BreadCum";
import TableWithHeader from "../../../components/dashboard/TableWithHeader";
import useGetUser from "../../../hooks/useGetUser";

const UserList = () => {
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
      field: "Email",
    },
    {
      id: 5,
      field: "Phone Number",
    },
    {
      id: 6,
      field: "Role",
    },
    {
      id: 7,
      field: "Actions",
    },
  ];
  const [users] = useGetUser();
  return (
    <div>
      <BreadCum text1={"Admin Dashboard"} text2={"User List"} />
      <TableWithHeader data={users} tHeadData={tHeadData} show={"userList"} />
    </div>
  );
};

export default UserList;
