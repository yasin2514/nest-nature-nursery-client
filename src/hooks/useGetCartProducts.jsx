import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetCartProducts = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: cartProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart-products"],
    queryFn: async () => {
      const res = await axiosSecure.get("cart");
      return res.data;
    },
  });
  return [cartProducts, isLoading, refetch];
};

export default useGetCartProducts;
