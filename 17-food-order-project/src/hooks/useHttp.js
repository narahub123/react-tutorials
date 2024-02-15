// custom hook
// Checkout and Meals components need to send request
// even thought those requests send differnt points of time
// both need to deal with different request states : failing, loading, success
// state for logic should impact UI

import { useCallback, useEffect, useState } from "react";

// 1. requests are not always sending compoent which hook belongs get rendered
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  // even if the response has an  error occurred, it would carry some data
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }

  return resData;
}

// send http request
export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  function clearData() {
    setData(initialData);
  }

  // 2. update state based on request status
  // 4. useCallbak
  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  // 3.useEffect
  useEffect(() => {
    // 5. check sendRequest should always get sent
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
