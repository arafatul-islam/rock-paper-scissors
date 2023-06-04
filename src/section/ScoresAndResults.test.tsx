import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { OptionsProvider } from "../context/OptionContext";
import ScoresAndResults from "./ScoresAndResults";
import ChooseAndPlay from "./ChooseAndPlay";

describe("ScoresAndResults", () => {
  it("should display 2 on the screen after waiting 1s after clicking play button", () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoresAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const hand = screen.getByText("paper");
    fireEvent.click(hand);
    fireEvent.click(screen.getByText("Play"));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    screen.debug();
    expect(screen.getByTestId("timer")).toHaveTextContent("2");
  });

  it("should display 1 on the screen after waiting 2s after clicking play button", () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoresAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const hand = screen.getByText("paper");
    fireEvent.click(hand);
    fireEvent.click(screen.getByText("Play"));

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    screen.debug();
    expect(screen.getByTestId("timer")).toHaveTextContent("1");
  });
});
