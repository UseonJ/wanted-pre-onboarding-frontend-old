import { useEffect, useState } from "react";

const useFetch = (method,fetchUrl) => {

  const [data, setData] = useState();

  useEffect(() => {
    fetch(fetchUrl, {
      headers: {
        "method":{method},
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;

};

export default useFetch;