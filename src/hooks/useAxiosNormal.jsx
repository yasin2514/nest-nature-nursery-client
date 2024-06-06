import axios from "axios";

const axiosNormal = axios.create({
  baseURL: "https://nest-nature-nursery-server.vercel.app/",
});
const useAxiosNormal = () => {
  return axiosNormal;
};

export default useAxiosNormal;
