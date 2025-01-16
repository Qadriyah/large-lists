const SearchSkeleton = () => {
  return (
    <div className="flex">
      <div className="flex gap-2 h-8 px-2 items-center border border-gray-300 rounded-md animate-pulse">
        <div className="bg-slate-300 rounded-full w-4 h-4" />
        <div className="bg-slate-300 h-2 w-[200px]"></div>
      </div>
    </div>
  );
};

export default SearchSkeleton;
