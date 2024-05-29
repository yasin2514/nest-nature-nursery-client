import TableBody from "./TableBody";

const TableComponent = ({ tHeadData, data ,show}) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          {tHeadData?.map((item, index) => {
            return <th className="text-center" key={index}>{item?.field}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          return (
            <TableBody key={index} data={item} index={index} show={show} />
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
