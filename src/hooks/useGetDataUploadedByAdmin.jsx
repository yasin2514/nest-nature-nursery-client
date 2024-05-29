import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useGetDataUploadedByAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const URL = `products/uploadedBy/${user?.email}`;
  const {
    data: adminProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["adminProductList"],
    queryFn: async () => {
      const res = await axiosSecure.get(URL);
      return res.data;
    },
  });
  return [adminProducts, isLoading, refetch];
};

export default useGetDataUploadedByAdmin;
