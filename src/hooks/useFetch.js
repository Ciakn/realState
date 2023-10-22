import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url, query = "") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get("http://localhost:5000/houses");

        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, isLoading };
};
