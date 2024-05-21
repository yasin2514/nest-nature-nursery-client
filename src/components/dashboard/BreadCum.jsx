const BreadCum = ({ text1, text2 }) => {
  return (
    <div className="bg-white px-5 py-3 rounded-lg shadow-sm flex justify-between items-center text-lg font-semibold text-green-500">
      <span>{text2}</span>
      <div className="">
        <span>Dashboard</span> <span>/</span> <span>{text1}</span>
      </div>
    </div>
  );
};

export default BreadCum;
