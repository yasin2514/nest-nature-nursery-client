const Box = ({ value, title, className }) => {
  return (
    <div
      className={`${className} rounded-md col-span-3 h-32 p-2 flex flex-col items-center justify-center gap-3`}
    >
      <h1 className="text-white text-4xl font-bold">{value}</h1>
      <h1 className="text-white text-lg font-bold">{title}</h1>
    </div>
  );
};

export default Box;
