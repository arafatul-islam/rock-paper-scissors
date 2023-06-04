import { render, screen } from "@testing-library/react";
import { FaRegHandPaper } from "react-icons/fa";
import { describe, expect, it, vi } from "vitest";
import HandSelection from "./HandSelection";
import userEvent from "@testing-library/user-event";
import { OptionsProvider } from "../context/OptionContext";

vi.mock("./HandSelection.module.css", () => {
  return {
    default: {
      choiceBtn: "choiceBtn",
      activeHandStyle: "activeHandStyle",
    },
  };
});

describe("handSelection", () => {
  it("should render the handSelection with the right props", async () => {
    const user = userEvent.setup();
    render(
      <OptionsProvider>
        <HandSelection
          name="paper"
          icon={<FaRegHandPaper data-testid="paper" />}
          handChoiceIndex={0}
        />
      </OptionsProvider>
    );
    const hand = screen.getByText(/paper/i);
    // const icon = screen.getByTestId("paper");
    // expect(hand).toBeInTheDocument();
    // expect(icon).toBeVisible();
    await user.click(hand);

    expect(hand).toHaveClass("activeHandStyle");
  });
});
