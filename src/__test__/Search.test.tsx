import Search from "@/components/Search";
import { render } from "@testing-library/react";

describe("Search", () => {
  test("renders the search field", () => {
    const { container } = render(<Search searchParam="country" />);
    expect(container).toMatchSnapshot();
  });
});
