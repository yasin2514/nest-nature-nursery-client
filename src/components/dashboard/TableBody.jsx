const TableBody = ({ product, index }) => {
  const { name, price } = product || {};
  return (
    <>
      <tr>{index + 1}</tr>
      <tr>{name}</tr>
      <tr>{name}</tr>
      <tr>{name}</tr>
      <tr>{name}</tr>
      <tr>{name}</tr>
      <tr>{name}</tr>
      <tr>{price}</tr>
    </>
  );
};

export default TableBody;
