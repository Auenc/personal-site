const apiUrl = process.env.URL;

export const get = (endpoint: string) => request("GET", endpoint, null);

const request = async (
  method: string,
  endpoint: string,
  data: unknown
): Promise<Response> => {
  const opts: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    next: { revalidate: Number(process.env.CACHE_REVALIDATE) || 60 },
  };

  if (data) {
    opts.body = JSON.stringify(data);
  }

  const res = await fetch(`${apiUrl}${endpoint}`, opts);
  return res;
};
