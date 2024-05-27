import TableBody from "./TableBody";

const TableComponent = ({ tHeadData, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tHeadData?.map((item, index) => {
            return <th key={index}>{item?.field}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data?.map((item, index) => {
            return <TableBody key={index} product={item} index={index} />;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
