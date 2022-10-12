import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  // const textElement = screen.getByText("App");
  // expect(textElement).toBeInTheDocument();
  expect(getByText("App")).toBeTruthy();
});

describe("State is managed correctly", () => {
  it("count starts at 0", () => {
    const { getByTestId } = render(<App />);
    const count = getByTestId(`count`);

    expect(count.innerHTML).toBe("0");
  });

  it("should add 1 to count", () => {
    const { getByTestId } = render(<App />);
    const count = getByTestId(`count`);
    const add = getByTestId(`addCount`);

    fireEvent.click(add);
    expect(count.innerHTML).toBe("1");
  });

  it("should minus 1 from count", () => {
    const { getByTestId } = render(<App />);
    const count = getByTestId(`count`);
    const minus = getByTestId(`minusCount`);

    fireEvent.click(minus);
    expect(count.innerHTML).toBe("-1");
  });
});

it("delayed count starts at 0", () => {
  const { getByTestId } = render(<App />);
  const delayedCount = getByTestId(`delayed-count`);

  expect(delayedCount.innerHTML).toBe("delayedCounter : 0");
});

it("increments counter after 0.5s", async () => {
  const { getByTestId } = render(<App />);
  const delayedCount = getByTestId(`delayed-count`);

  fireEvent.click(getByTestId("button-up"));

  await waitFor(() => {
    expect(delayedCount.innerHTML).toBe("delayedCounter : 1");
  });
});
