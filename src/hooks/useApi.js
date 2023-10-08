import { useState, useEffect } from "react";

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchApi = () => {
        fetch(url)
            .then((response) => response.json())
            .then((respuestaJson) => {
                setData(respuestaJson.data);
                setLoading(true); 
            })
            .catch((error) => console.log(error))
    }
    useEffect(()=>{
        fetchApi();
    },[url]); 

    return { loading, data };
}

export default useApi;