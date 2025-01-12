/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useTransition } from "react";
import SearchIcon from "./SearchIcon";
import Spinner from "./Spinner";

type IProps = {
  searchParam: string;
};

const Search = ({ searchParam }: IProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const newSearchParams = new URLSearchParams(searchParams.toString());
      if (!value) {
        newSearchParams.delete(searchParam);
      } else {
        newSearchParams.set(searchParam, event.target.value);
      }
      startTransition(() => router.push(`?${newSearchParams.toString()}`));
    }, 500),
    []
  );

  return (
    <div className="flex">
      <div className="flex gap-2 h-8 px-2 items-center border border-gray-300 rounded-md">
        {isPending ? (
          <Spinner />
        ) : (
          <SearchIcon width="18px" height="18px" className="text-gray-500" />
        )}
        <input
          type="search"
          placeholder={`search by ${searchParam} ...`}
          onChange={handleChange}
          defaultValue={searchParams.get(searchParam) || ""}
          className="border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
