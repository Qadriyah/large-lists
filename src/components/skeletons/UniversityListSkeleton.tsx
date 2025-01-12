const UniversityListSkeleton = () => {
  return (
    <table className="w-full opacity-50">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {Array(30)
          .fill(null)
          .map((_, index) => (
            <tr key={index} className="animate-pulse">
              <td>
                <p className="h-2 bg-slate-300 rounded"></p>
              </td>
              <td>
                <p className="h-2 bg-slate-300 rounded"></p>
              </td>
              <td>
                <p className="h-2 bg-slate-300 rounded"></p>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UniversityListSkeleton;
