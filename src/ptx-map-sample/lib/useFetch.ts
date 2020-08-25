import { useState, useCallback } from "react";
import fetchData from "./fetchData";

export interface UseFetchOptions<Res> {
  apiPath: string
  initResponseData: Res
  fetchFn?: () => Promise<Res>
}

export default function useFetch<T>({
  apiPath, initResponseData, fetchFn,
}: UseFetchOptions<T>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setErr] = useState();
  const [responseData, setResponseData] = useState<T>(initResponseData);

  const handleFetchData = useCallback(() => {
    setLoading(true);
    const fetchCallback = fetchFn ? fetchFn() : fetchData({ // support fetch function or from uri
      uri: apiPath,
      defaultRes: initResponseData,
    });

    fetchCallback
      .then(res => setResponseData(res))
      .catch(error => {
        console.error(error);
        setErr(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiPath, fetchFn, initResponseData]);

  return {
    loading,
    error,
    handleFetchData,
    responseData
  };
}