import getConfig from "next/config";

const { apiUrl } = getConfig();

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
  };

  if (data) {
    opts.body = JSON.stringify(data);
  }

  const res = await fetch(`${apiUrl}${endpoint}`, opts);
  return res;
};
