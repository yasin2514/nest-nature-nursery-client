import { useQuery } from "@tanstack/react-query";
import Container from "../../components/ui/Container";
import ShortBanner from "../../components/ui/ShortBanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const PlantCategory = () => {
  const axiosSecure = useAxiosSecure();
  // get all plant categories
  const { data: categoryData = [] } = useQuery({
    queryKey: "plant-category",
    queryFn: async () => {
      const res = await axiosSecure.get("products/groupedByCategory");
      return res.data;
    },
  });
  // filter plants by category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Update selectedCategory when categoryData is fetched
  useEffect(() => {
    if (categoryData?.length > 0) {
      setSelectedCategory(categoryData[0]?.category);
    }
  }, [categoryData]);

  console.log({ selectedCategory });

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
                    className="text-lg hover:cursor-pointer hover:text-green-600 hover:font-bold font-semibold"
                  >
                    {item?.category}
                  </span>
                </div>
              );
            })}
        </aside>
        <div className="col-span-9">
          <h1>Plant Category</h1>
          <p>products</p>
        </div>
      </Container>
    </>
  );
};

export default PlantCategory;
