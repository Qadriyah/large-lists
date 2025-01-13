import UniversityList from "@/components/UniversityList";
import universities from "@/data/universities.json";
import { University } from "@/types/entities";
import { render, screen } from "@testing-library/react";
import { act } from "react";

describe("UniversityList", () => {
  const setup = async (data: Promise<University[]>) => {
    await act(async () => {
      render(<UniversityList resPromise={data} />);
    });
  };

  test("renders the university list", async () => {
    await setup(Promise.resolve(universities));

    expect(screen.getAllByRole("row")).toHaveLength(19);
    expect(screen.getAllByRole("cell")[0]).toHaveTextContent(
      "Bugema University"
    );
  });

  test("no data available", async () => {
    await setup(Promise.resolve([]));

    expect(screen.getByRole("cell")).toHaveTextContent("No data to display");
  });
});
