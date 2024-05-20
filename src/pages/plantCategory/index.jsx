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
  const { data: products = [] } = useQuery({
    queryKey: ["category-products", selectedCategory],
    queryFn: async () => {
      const res = await axiosSecure.get(`products/category/${selectedCategory}`);
      return res.data;
    },
    enabled: !!selectedCategory,
  });

  return (
    <>
      <ShortBanner
        banner={"all-plants-banner-3"}
        header={"All Plant Category"}
        text={`Welcome to Next Nature Nursery, your go-to for vibrant, healthy plants. Find flowers, herbs, succulents, and more to enhance your indoor and outdoor spaces.`}
      />

      <Container className="grid grid-cols-12 py-16">
        <aside className="col-span-3">
          <h1 className="font-bold text-2xl mb-4 text-green-600">
            Plant Categories
          </h1>
          {categoryData &&
            categoryData.map((item, index) => {
              return (
                <div key={index} className="my-2">
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
        </aside>
        <div className="col-span-9">
        <ProductsContainer data={products}/>
        </div>
      </Container>
    </>
  );
};

export default PlantCategory;
