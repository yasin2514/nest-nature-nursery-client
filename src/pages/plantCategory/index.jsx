import { useQuery } from "@tanstack/react-query";
import Container from "../../components/ui/Container";
import ShortBanner from "../../components/ui/ShortBanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import ProductsContainer from "../../components/ui/ProductsContainer";

const PlantCategory = () => {
  const axiosSecure = useAxiosSecure();
  // get all plant categories
  const { data: categoryData = [] } = useQuery({
    queryKey: ["plant-category"],
    queryFn: async () => {
      const res = await axiosSecure.get("products/groupedByCategory");
      return res.data;
    },
  });
  // filter plants by category
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    if (categoryData?.length > 0) {
      setSelectedCategory(categoryData[0]?.category);
    }
  }, [categoryData]);

  // get all plant categories
  const { data: products = [], refetch } = useQuery({
    queryKey: ["category-products", selectedCategory],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `products/category/${selectedCategory}`
      );
      return res.data;
    },
    enabled: !!selectedCategory,
  });
  useEffect(() => {
    refetch();
  }, [selectedCategory, refetch]);
  return (
    <div className="bg-[#fcfffa]">
      <ShortBanner
        banner={"all-plants-banner-3"}
        header={"All Plant Category"}
        text={`Welcome to Next Nature Nursery, your go-to for vibrant, healthy plants. Find flowers, herbs, succulents, and more to enhance your indoor and outdoor spaces.`}
      />

      <Container className="grid grid-cols-12 py-16 place-content-center gap-5">
        <aside className="col-span-3">
          <h1 className="font-bold text-2xl mb-16 text-green-600">
            Plant Categories
          </h1>
          <div className=" py-1 space-y-2 max-h-[600px]  overflow-auto">
            {categoryData &&
              categoryData.map((item, index) => {
                return (
                  <div key={index}>
                    <span
                      onClick={(e) => {
                        setSelectedCategory(e.target.innerText);
                      }}
                      className="text-lg hover:cursor-pointer hover:text-green-700 font-semibold"
                    >
                      {item?.category}
                    </span>
                    <span className="ms-2">({item?.totalProducts} plants)</span>
                  </div>
                );
              })}
          </div>
        </aside>
        <div className="col-span-9">
          <div className="flex justify-between items-start mb-10">
            <h1 className="font-bold text-2xl">
              Category:{" "}
              <span className="text-green-600">{selectedCategory}</span>
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter plant name"
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
          <ProductsContainer data={products} />
        </div>
      </Container>
    </div>
  );
};

export default PlantCategory;
