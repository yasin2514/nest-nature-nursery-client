import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetUser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: user = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });
  return [user, isLoading, refetch];
};

export default useGetUser;
