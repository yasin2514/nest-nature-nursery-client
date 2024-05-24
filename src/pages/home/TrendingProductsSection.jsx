import { Link } from "react-router-dom";
import ProductsCardTwo from "../../components/ui/ProductsCardTwo";
import SectionHeader from "../../components/ui/SectionHeader";
import useGetProducts from "../../hooks/useGetProducts";
import img from "../../assets/bg.jpg"
const TrendingProductsSection = () => {
  const [products] = useGetProducts();

  return (
    <div>
      <section className="flex justify-between">
        <SectionHeader header={"Weekly Best Deal"} />
        <div className="space-x-3">
          <span>left</span>
          <span>right</span>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3 relative overflow-hidden rounded-2xl">
          <img src={img} alt="Deal" className="w-full object-contain h-full" />
          <div className="absolute inset-0 bg-green-500 bg-opacity-50 flex flex-col justify-center items-start p-6">
            <h3 className="text-white text-2xl font-bold mb-2">
              Buy New Fresh Arrivals
            </h3>
            <Link to="/products" className="text-white underline">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {products.slice(0, 6).map((product, index) => (
            <ProductsCardTwo data={product} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingProductsSection;
