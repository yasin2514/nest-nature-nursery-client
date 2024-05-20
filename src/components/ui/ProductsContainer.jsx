import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  // Calculate index of the first and last product to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / productsPerPage);

  // Function to handle pagination buttons
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-10 ">
        {currentProducts?.map((product, index) => {
          return (
            <div key={index} className="col-span-4">
              <ProductCard data={product} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <button
          className="btn btn-sm"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Pre
        </button>
        {pageNumbers?.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn btn-sm ${
              currentPage === pageNumber ? "bg-green-700 text-white" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="btn btn-sm"
          disabled={indexOfLastProduct >= data?.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductsContainer;
