import ProductsCardTwo from "../../components/ui/ProductsCardTwo";
import SectionHeader from "../../components/ui/SectionHeader";
import useGetProducts from "../../hooks/useGetProducts";
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
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 ">
        <div className="md:col-span-3 relative overflow-hidden ">
          <div className=" absolute top-0 w-full h-[150px] ">
            <div className="clip-path-one bg-opacity-75 bg-[#e4e4e4]"></div>
          </div>
          <div className="bg-gray-100 h-full w-full flex items-center justify-center">
            {products.slice(0, 1).map((product, index) => (
              <img
                key={index}
                src={product?.photo[0]}
                alt="bg"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className=" absolute bottom-0 w-full h-[200px] ">
            <div className="clip-path-two bg-opacity-80 bg-green-700 px-8 flex items-center justify-start ">
              <h1 className="opacity-100 text-white text-3xl font-bold mt-10">
                Buy New
                <br />
                Fresh Arrivals
              </h1>
            </div>
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
