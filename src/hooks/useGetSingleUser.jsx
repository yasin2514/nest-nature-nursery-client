import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useGetSingleUser = () => {
  const { user } = useContext(AuthContext);
  const URL = `user/${user?.email}`;
  const axiosSecure = useAxiosSecure();

  const {
    data: userData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["single-user"],
    queryFn: async () => {
      const res = await axiosSecure.get(URL);
      return res.data;
    },
  });
  return [userData, isLoading, refetch];
};
export default useGetSingleUser;
