import ProductCard from "./ProductCard";

const ProductsContainer = ({ data }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {data &&
        data.map((product, index) => {
          return (
            <div key={index} className="col-span-4">
              <ProductCard data={product} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductsContainer;
