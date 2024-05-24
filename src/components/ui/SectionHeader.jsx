
const SectionHeader = ({header, title}) => {
    return (
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-4xl font-bold text-black ">{header}</h2>
        <p className=" text-green-600">{title}</p>
      </div>
    );
};

export default SectionHeader;