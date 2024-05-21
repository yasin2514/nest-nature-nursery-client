import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();
  console.log({ id });
  console.log({ products });
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default ProductDetails;
