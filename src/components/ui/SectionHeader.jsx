
const SectionHeader = ({header, title,className}) => {
    return (
      <div className={`text-center space-y-2 mb-[50px] ${className}`}>
        <h2 className="text-3xl font-semibold text-black ">{header}</h2>
        <p className="text-sm  text-green-600 uppercase">{title}</p>
      </div>
    );
};

export default SectionHeader;