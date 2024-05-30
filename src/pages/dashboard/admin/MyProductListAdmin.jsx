import BreadCum from "../../../components/dashboard/BreadCum";
import TableWithHeader from "../../../components/dashboard/TableWithHeader";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useGetDataUploadedByAdmin from "../../../hooks/useGetDataUploadedByAdmin";

const MyProductListAdmin = () => {
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
    {
      id: 7,
      field: "Actions",
    },
  ];

  const [adminProducts] = useGetDataUploadedByAdmin();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <BreadCum
        text1={"Admin Dashboard"}
        text2={`${user?.displayName} Product List `}
      />
      <TableWithHeader
        data={adminProducts}
        tHeadData={tHeadData}
        show={"myList"}
      />
    </div>
  );
};

export default MyProductListAdmin;
