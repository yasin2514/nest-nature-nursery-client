import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetPaymentInfoByUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const URL = `paymentInfo/${user?.email}`;
  const {
    data: paymentUserData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["paymentInfoByUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(URL);
      return res.data;
    },
  });
  return [paymentUserData, isLoading, refetch];
};

export default useGetPaymentInfoByUser;
