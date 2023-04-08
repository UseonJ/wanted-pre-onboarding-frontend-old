import { useEffect, useState } from "react";

const UseFetch = (method,fetchUrl,ID,PW) => {

  const [data, setData] = useState();

  useEffect(() => {
    fetch(fetchUrl, {
      method:{method},
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        'email': {ID},
        'password':{PW}
      }
    })
      .then((res) => {
        console.log(res);
        return res.json();
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

export default UseFetch;