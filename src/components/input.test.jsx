import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Input from "./Input";

it("renders an input with the proper label and id when provided both", () => {
  render(<Input label="Test" id="test" />);

  const input = screen.getByLabelText("Test");
  expect(input).toBeInTheDocument();
});

it("renders an input with the proper label and id using a default for the label", () => {
  render(<Input id="test" />);
  const input = screen.getByLabelText("Test");
  expect(input).toBeInTheDocument();
});

// it("calls a callback whenever we type in the input", () => {
//   const handleChange = vi.mock();
//   const user = userEvent.setup();

//   render(<Input id="test" onChange={handleChange} />);

//   const input = screen.getByLabelText("Test");
//   user.type(input, "123");

//   expect(handleChange).toHaveBeenCalledTimes(3);
// });
