import BreadCum from '../../../components/dashboard/BreadCum';
import Setting from '../../../components/dashboard/Setting';

const UserSettings = () => {
    return (
      <div>
        <BreadCum text1={"User Dashboard"} text2={"Settings"} />
        <Setting />
      </div>
    );
};

export default UserSettings;