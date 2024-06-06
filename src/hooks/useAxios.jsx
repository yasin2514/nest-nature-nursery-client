import axios from "axios";

const axiosNormal = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxios = () => {
  return axiosNormal;
};

export default useAxios;
