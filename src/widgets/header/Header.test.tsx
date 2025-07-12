import type React from "react";
import Header from "./Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { themeChange } from "theme-change";
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/features/auth/model/useAuth", () => ({
  useAuth: vi.fn(),
}));
vi.mock("@/shared/hooks/useIsAuth", () => ({
  default: vi.fn(),
}));
vi.mock("theme-change", () => ({
  themeChange: vi.fn(),
}));

import { useAuth } from "@/features/auth/model/useAuth";
import useIsAuth from "@/shared/hooks/useIsAuth";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Header Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Basic Rendering", () => {
    it("should render logo link", () => {
      (useAuth as any).mockReturnValue({ isAuth: false });
      renderWithRouter(<Header />);
      const logoLink = screen.getByRole("link", { name: "learnUA" });
      expect(logoLink).toBeInTheDocument();
    });

    it("should render theme toggle buttons", () => {
      (useAuth as any).mockReturnValue({ isAuth: false });
      renderWithRouter(<Header />);
      const lightThemeBtn = screen.getByRole("button", {
        name: (content, element) => element?.getAttribute("data-set-theme") === "corporate",
      });
      const darkThemeBtn = screen.getByRole("button", {
        name: (content, element) => element?.getAttribute("data-set-theme") === "dim",
      });
      expect(lightThemeBtn).toBeInTheDocument();
      expect(darkThemeBtn).toBeInTheDocument();
    });

    it("should call themeChange on mount", () => {
      renderWithRouter(<Header />);
      expect(themeChange).toHaveBeenCalledWith(false);
    });
  });

  describe("Unauthenticated User", () => {
    beforeEach(() => {
      (useAuth as any).mockReturnValue({ isAuth: false });
    });

    it("should display login and register buttons", () => {
      renderWithRouter(<Header />);
      const loginBtn = screen.getByRole("button", { name: "Вхід" });
      const registerBtn = screen.getByRole("button", { name: "Реєстрація" });

      expect(loginBtn).toBeInTheDocument();
      expect(registerBtn).toBeInTheDocument();
    });

    it("should not display authenticated user buttons", () => {
      renderWithRouter(<Header />);

      expect(screen.queryByText("Курси")).not.toBeInTheDocument();
      expect(screen.queryByText("Профіль")).not.toBeInTheDocument();
    });
  });

  describe("Authenticated User", () => {
    beforeEach(() => {
      (useAuth as any).mockReturnValue({ isAuth: true });
    });

    it("should display authenticated user buttons", () => {
      renderWithRouter(<Header />);

      expect(screen.queryByText("Курси")).toBeInTheDocument();
      expect(screen.queryByText("Профіль")).toBeInTheDocument();
    });

    it("should not display login and register buttons", () => {
      renderWithRouter(<Header />);

      expect(screen.queryByText("Вхід")).not.toBeInTheDocument();
      expect(screen.queryByText("Реєстрація")).not.toBeInTheDocument();
    });
  });

  describe("User interactions", () => {
    it("should toogle theme button clicks", () => {
      (useAuth as any).mockReturnValue({ isAuth: false });

      renderWithRouter(<Header />);

      const lightThemeBtn = screen.getByRole("button", {
        name: (content, element) => element?.getAttribute("data-set-theme") === "corporate",
      });
      const darkThemeBtn = screen.getByRole("button", {
        name: (content, element) => element?.getAttribute("data-set-theme") === "dim",
      });

      fireEvent.click(lightThemeBtn);
      fireEvent.click(darkThemeBtn);

      expect(lightThemeBtn).toHaveAttribute("data-set-theme", "corporate");
      expect(darkThemeBtn).toHaveAttribute("data-set-theme", "dim");
    });
  });

  describe("Edge Cases", () => {
    it("should handle undefined auth state", () => {
      (useAuth as any).mockReturnValue({ isAuth: undefined });

      expect(() => renderWithRouter(<Header />)).not.toThrow();
    });

    it("should handle null auth state", () => {
      (useAuth as any).mockReturnValue({ isAuth: null });

      renderWithRouter(<Header />);

      expect(screen.getByText("Вхід")).toBeInTheDocument();
    });
  });
});
