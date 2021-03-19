import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if(!res.ok)
                    throw Error("Problem fetching the data.");
                return res.json();
            })
            .then((data) => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setPending(false);
                }
            )
        }, 1000);
    }, [url]);
    
    return {data, error, pending};
}
 
export default useFetch;