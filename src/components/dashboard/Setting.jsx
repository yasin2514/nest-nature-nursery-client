import useGetSingleUser from "../../hooks/useGetSingleUser";

const Setting = () => {
  const [userData] = useGetSingleUser();
  console.log({ userData });
  return (
    <div className="bg-white flex items-center justify-center p-5 mt-5 rounded-lg h-[calc(100vh-177px)] overflow-auto ">
      <h1 className="text-3xl font-semibold">Up Coming Feature</h1>
    </div>
  );
};

export default Setting;
