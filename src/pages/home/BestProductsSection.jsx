import { Link } from "react-router-dom";
import ProductCard from "../../components/ui/ProductCard";
import SectionHeader from "../../components/ui/SectionHeader";
import useGetProducts from "../../hooks/useGetProducts";

const BestProductsSection = () => {
  const [products] = useGetProducts();

  return (
    <div>
      <div className="flex justify-between items-start">
        <SectionHeader header={"Our Best Plants"} />
        <div>
          <Link to="/all-plants">Vew All</Link>
        </div>
      </div>
      <div className={"grid grid-cols-4 gap-8"}>
        {products?.slice(0, 8).map((product, index) => {
          return (
            <div key={index} className={""}>
              <ProductCard data={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestProductsSection;
