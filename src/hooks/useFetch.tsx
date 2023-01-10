import { useState, useEffect } from 'react';

interface Fetcher<TData, TParams> {
  (params?: TParams): Promise<TData>;
}

interface Options {
  enabled?: boolean;
}
export const useFetch = <TData, TParams>(
  fetcher: Fetcher<TData, TParams>,
  params?: TParams,
  options: Options = {
    enabled: true,
  }
) => {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const resData = await fetcher(params);
      setData(resData);
    } catch (e) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!options.enabled) return;

    (async () => {
      await handleFetch();
    })();

    return () => {
      setError(null);
      setLoading(false);
    };
  }, [params]);

  return { data, loading, error };
};
