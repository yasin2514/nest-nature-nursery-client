import { useMemo, useState } from "react";
import Container from "../../components/ui/Container";
import ProductsContainer from "../../components/ui/ProductsContainer";
import ShortBanner from "../../components/ui/ShortBanner";
import useGetProducts from "../../hooks/useGetProducts";

const AllPlants = () => {
  const [products] = useGetProducts();
  const [search, setSearch] = useState("");

  // Filter products based on the search input
  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item?.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="bg-[#fcfffa]">
      <ShortBanner
        banner={"all-plants-banner"}
        header={"All Plant"}
        text={`Welcome to Next Nature Nursery, your go-to for vibrant, healthy plants. Find flowers, herbs, succulents, and more to enhance your indoor and outdoor spaces.`}
      />
      <Container className={"py-16"}>
        <div className="flex justify-between item-start">
          <h1 className="font-bold text-2xl mb-16 text-green-600">
            All Plants
          </h1>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Enter plant name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-3 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <ProductsContainer
          data={filteredProducts}
          className={"grid grid-cols-12 gap-10"}
          innerClassName={"col-span-3"}
          pageLimit={8}
        />
      </Container>
    </div>
  );
};

export default AllPlants;
