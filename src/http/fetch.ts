import { SearchParamsType } from "@/types/RequestTypes";

const baseUrl = process.env.BASE_URL || "http://universities.hipolabs.com";

export const get = async <T>(
  path: string,
  searchParams: Promise<SearchParamsType>
): Promise<T> => {
  // "use cache";
  const { country, page, limit } = await searchParams;
  let url = `${baseUrl}${path}?page=${page || 1}`;

  if (limit) url += `&limit=${limit}`;
  if (country) url += `&country=${country}`;

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();
  return result;
};
