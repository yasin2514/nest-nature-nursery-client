import BreadCum from '../../../components/dashboard/BreadCum';
import Setting from '../../../components/dashboard/Setting';

const AdminSettings = () => {
    return (
      <div>
        <BreadCum text1={"Admin Dashboard"} text2={"Settings"} />
        <Setting />
      </div>
    );
};

export default AdminSettings;