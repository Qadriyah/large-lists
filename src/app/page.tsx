import Search from "@/components/Search";
import UniversityListSkeleton from "@/components/skeletons/UniversityListSkeleton";
import UniversityList from "@/components/UniversityList";
import { get } from "@/http/fetch";
import { University } from "@/types/entities";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<{
    country?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const { country } = await searchParams;

  const res = get<University[]>(
    `http://universities.hipolabs.com/search?country=${country}`
  );

  return (
    <div className="m-5">
      <div className="mb-5">
        <Search searchParam="country" />
      </div>
      <Suspense fallback={<UniversityListSkeleton />}>
        <UniversityList resPromise={res} />
      </Suspense>
    </div>
  );
}
