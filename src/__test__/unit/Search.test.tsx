import Search from "@/components/Search";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
  const setup = () => {
    render(<Search searchParam="country" />);
  };

  beforeEach(() => {
    setup();
  });

  test("renders the search field", () => {
    expect(
      screen.queryByPlaceholderText("search by country ...")
    ).toBeInTheDocument();
  });

  test("enters the input value in the search field", async () => {
    await waitFor(() =>
      userEvent.type(
        screen.getByPlaceholderText("search by country ..."),
        "uganda"
      )
    );

    expect(
      screen.getByPlaceholderText("search by country ...")
    ).toHaveDisplayValue("uganda");
  });
});
