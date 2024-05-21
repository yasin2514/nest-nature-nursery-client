import { useQuery } from "@tanstack/react-query";
import Container from "../../components/ui/Container";
import ShortBanner from "../../components/ui/ShortBanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState, useMemo } from "react";
import ProductsContainer from "../../components/ui/ProductsContainer";

const PlantCategory = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  // Get all plant categories
  const { data: categoryData = [] } = useQuery({
    queryKey: ["plant-category"],
    queryFn: async () => {
      const res = await axiosSecure.get("products/groupedByCategory");
      return res.data;
    },
  });

  // Set the default selected category
  useEffect(() => {
    if (categoryData?.length > 0) {
      setSelectedCategory(categoryData[0]?.category);
    }
  }, [categoryData]);

  // Get products based on the selected category
  const { data: products = [] } = useQuery({
    queryKey: ["category-products", selectedCategory],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `products/category/${selectedCategory}`
      );
      return res.data;
    },
    enabled: !!selectedCategory,
  });

  // filter categories based on the search input
  const filteredCategories = useMemo(() => {
    return categoryData.filter((item) =>
      item?.category?.toLowerCase().includes(categorySearch.toLowerCase())
    );
  }, [categoryData, categorySearch]);

  // Filter products based on the search input
  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item?.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="bg-[#fcfffa]">
      <ShortBanner
        banner={"all-plants-banner-3"}
        header={"All Plant Category"}
        text={`Welcome to Next Nature Nursery, your go-to for vibrant, healthy plants. Find flowers, herbs, succulents, and more to enhance your indoor and outdoor spaces.`}
      />
      <Container className="grid grid-cols-12 py-16 place-content-center gap-5">
        <aside className="col-span-3">
          <div className="mb-10 space-y-2">
            <h1 className="font-bold text-2xl  text-green-600">
              Plant Categories
            </h1>
            <label className="border rounded-md py-2 px-2 flex items-center max-w-[240px] gap-2">
              <input
                type="text"
                className="w-full border-0 focus:ring-0 focus:outline-none"
                placeholder="Search category"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
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
          <div className="py-1 space-y-2  max-h-[560px] overflow-auto ">
            {filteredCategories?.map((item, index) => (
              <div key={index}>
                <span
                  onClick={() => setSelectedCategory(item?.category)}
                  className="text-lg hover:cursor-pointer hover:text-green-700 font-semibold"
                >
                  {item?.category}
                </span>
                <span className="ms-2">({item?.totalProducts} plants)</span>
              </div>
            ))}
          </div>
        </aside>
        <div className="col-span-9">
          <div className="flex justify-between items-start mb-20">
            <h1 className="font-bold text-2xl">
              Category:{" "}
              <span className="text-green-600">{selectedCategory}</span>
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search plant name"
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
            innerClassName={"col-span-4"}
            pageLimit={6}
          />
        </div>
      </Container>
    </div>
  );
};

export default PlantCategory;
