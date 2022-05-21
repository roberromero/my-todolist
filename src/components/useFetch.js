import { useEffect, useState } from "react";


const useFetch = (url, method) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchData, setFetchData] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
          fetch(url, method)
          .then(response => {
            if(!response.ok){
              throw Error ("Data could not be fetched");
            }
            return response.json()
          })
          .then(data => {
              setData(data);
              setIsLoading(false);
              setFetchData(null);
          } )
          .catch(e=>{
            setFetchData(e.message);
            setIsLoading(false);
          })
        }, 1000);
      }, [])

      return { data, isLoading, fetchData};
}

export default useFetch

