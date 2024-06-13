import  { useState } from "react";
import ProductsCardTwo from "../../components/ui/ProductsCardTwo";
import SectionHeader from "../../components/ui/SectionHeader";
import useGetProducts from "../../hooks/useGetProducts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TrendingProductsSection = () => {
  const [products] = useGetProducts();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedProducts = products?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <section className="flex justify-between flex-wrap gap-y-2 items-center mb-12">
        <SectionHeader
          className={"text-start"}
          header="Weekly Best Deals"
          title="We provide the best plants at the best price"
        />
        <div className="space-x-3">
          <button
            onClick={handlePrevious}
            className="btn btn-sm text-green-600"
            disabled={currentPage === 0}
          >
            <FaChevronLeft />
          </button>
          <button
            className="btn btn-sm text-green-600"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            <FaChevronRight/>
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1  lg:grid-cols-12 gap-10">
        <div className="md:col-span-3 relative overflow-hidden h-[700px]">
          <div className="absolute top-0 w-full h-[150px]">
            <div className="clip-path-one bg-opacity-50 bg-[#e4f5e0]"></div>
          </div>
          <div className="bg-gray-100 h-full w-full flex items-center justify-center">
            {products.slice(0, 1).map((product, index) => (
              <img
                key={index}
                src={product?.photos[0]}
                alt="bg"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className="absolute bottom-0 w-full h-[200px]">
            <div className="clip-path-two bg-opacity-80 bg-green-700 px-8 flex items-center justify-start">
              <h1 className="opacity-100 text-white text-3xl font-bold mt-10">
                Buy New
                <br />
                Fresh Arrivals
              </h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedProducts.map((product, index) => (
            <ProductsCardTwo data={product} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingProductsSection;
