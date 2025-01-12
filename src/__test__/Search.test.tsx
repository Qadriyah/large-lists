import Search from "@/components/Search";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
  test("renders the search field", () => {
    render(<Search searchParam="country" />);

    const elem = screen.queryByPlaceholderText("search by country ...");
    expect(elem).toBeInTheDocument();
  });

  test("enters the input value in the search field", async () => {
    render(<Search searchParam="country" />);
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
