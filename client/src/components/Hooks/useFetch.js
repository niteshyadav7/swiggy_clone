import { useEffect, useState } from "react";


const useFetch = (link) => {
  const [state, setState] = useState();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async (link) => {
    const data = await fetch(`${link}`);
    const json = await data.json();
    setState(json);
    // console.log(json);
  };
  return state;
};
export default useFetch;
