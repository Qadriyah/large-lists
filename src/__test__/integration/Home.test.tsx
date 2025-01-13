import Home from "@/app/page";
import universities from "@/data/universities.json";
import { mockFetch } from "@/utils/test-utils";
import { render, screen } from "@testing-library/react";
import { act } from "react";

describe("Home", () => {
  const setup = async () => {
    window.fetch = mockFetch(universities);
    const Page = await Home({
      searchParams: Promise.resolve({ country: "uganda" }),
    });

    await act(async () => {
      render(Page);
    });
  };

  test("renders the page", async () => {
    await setup();

    expect(screen.getAllByRole("row")).toHaveLength(19);
  });
});
