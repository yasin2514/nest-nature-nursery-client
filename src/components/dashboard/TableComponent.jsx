import TableBody from "./TableBody";

const TableComponent = ({ tHeadData, data, show, others }) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          {tHeadData?.map((item, index) => {
            return (
              <th className="text-center" key={index}>
                {item?.field}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data
            .slice()
            .reverse()
            .map((item, index) => (
              <TableBody
                key={index}
                data={item}
                index={index}
                show={show}
                others={others}
              />
            ))
        ) : (
          <tr>
            <td className="text-center py-4" colSpan={tHeadData.length}>
              No data found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
