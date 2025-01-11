export const get = async <T>(path: string): Promise<T> => {
  const response = await fetch(path, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();
  return result;
};
