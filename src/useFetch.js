import {useEffect, useState} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if(!res.ok){
                throw Error('Could Not Fetch Data')
              } else {
                return res.json();
              }
            })
            .then(data => {
              setData(data)
              setIsLoading(false)
              setError(null)
            })
            .catch(err => {
              setIsLoading(false)
              setError(err.message)
            })
        }, 1500)
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;