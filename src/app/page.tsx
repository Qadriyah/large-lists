import Search from "@/components/Search";
import SearchSkeleton from "@/components/skeletons/SearchSkeleton";
import UniversityListSkeleton from "@/components/skeletons/UniversityListSkeleton";
import UniversityList from "@/components/UniversityList";
import { get } from "@/http/fetch";
import { University } from "@/types/entities";
import { SearchParamsType } from "@/types/RequestTypes";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<SearchParamsType>;
};

export default function Home({ searchParams }: PageProps) {
  const res = get<University[]>("/search", searchParams);

  return (
    <div className="m-5">
      <div className="mb-5">
        <Suspense fallback={<SearchSkeleton />}>
          <Search searchParam="country" />
        </Suspense>
      </div>
      <Suspense fallback={<UniversityListSkeleton />}>
        <UniversityList resPromise={res} />
      </Suspense>
    </div>
  );
}
