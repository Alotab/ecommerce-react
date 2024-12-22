import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";
import axios from "axios";

//'https://api.escuelajs.co/api/v1/products'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res =  await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  // console.log(data)
  return { data, loading, error };
};

export default useFetch;