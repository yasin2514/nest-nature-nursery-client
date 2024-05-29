import TableBody from "./TableBody";

const TableComponent = ({ tHeadData, data ,show}) => {
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
        {data?.map((item, index) => {
          return <TableBody key={index} data={item} index={index} show={show}/>;
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
