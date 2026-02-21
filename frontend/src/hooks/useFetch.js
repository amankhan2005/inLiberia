 // src/hooks/useFetch.js

import { useState, useEffect, useCallback } from "react";

export default function useFetch(fetchFunction, params = null, auto = true) {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(auto);

  const [error, setError] = useState(null);



  const execute = useCallback(

    async (overrideParams = params) => {

      try {

        setLoading(true);

        setError(null);

        const result = await fetchFunction(overrideParams);

        setData(result);

        return result;

      } catch (err) {

        setError(err?.response?.data?.message || err.message);

      } finally {

        setLoading(false);

      }

    },

    [fetchFunction, params]

  );



  useEffect(() => {

    if (auto) execute();

  }, [execute, auto]);



  return {

    data,

    loading,

    error,

    refetch: execute,

    setData,

  };

}