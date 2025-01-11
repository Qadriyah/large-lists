import { University } from "@/types/entities";
import { use } from "react";

type IProps = {
  resPromise: Promise<University[]>;
};

const UniversityList = ({ resPromise }: IProps) => {
  const data = use(resPromise);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((university, index) => (
          <tr key={index}>
            <td>{university.name}</td>
            <td>{university.country}</td>
            <td>{university.web_pages.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UniversityList;
