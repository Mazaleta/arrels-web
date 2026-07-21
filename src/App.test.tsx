import axe from "axe-core";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

function chooseLanguage(language: string) {
  fireEvent.click(screen.getByTestId("language-selector"));
  fireEvent.click(screen.getByRole("option", { name: language }));
}

describe("Arrels website", () => {
  it("renders the main story and changes language", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Arrels" })).toBeInTheDocument();
    chooseLanguage("Castellano");
    expect(screen.getByRole("heading", { name: "Puzle mensual" })).toBeInTheDocument();

    chooseLanguage("Valencià");
    expect(screen.getByRole("heading", { name: "Puzle mensual" })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("lang", "ca");

    chooseLanguage("English");
    expect(screen.getByRole("heading", { name: "Monthly puzzle" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Arrels Studio" })).toBeInTheDocument();
  });

  it("keeps cookie preferences available after the initial decision", () => {
    render(<App />);
    chooseLanguage("Castellano");
    fireEvent.click(screen.getByRole("button", { name: "Rechazar opcionales" }));
    expect(screen.queryByRole("heading", { name: "Tú eliges qué arraiga" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Abrir preferencias de cookies" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Preferencias de cookies" })).toBeInTheDocument();
  });

  it("has no automatically detectable accessibility violations", async () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId("language-selector"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    const results = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } },
    });
    expect(results.violations).toEqual([]);
  });
});
