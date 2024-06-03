import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetPaymentInfo = () => {
     const axiosSecure = useAxiosSecure();
  const {
    data: paymentData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["paymentInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get("paymentInfo");
      return res.data;
    },
  });
  return [paymentData, isLoading, refetch];
};

export default useGetPaymentInfo;