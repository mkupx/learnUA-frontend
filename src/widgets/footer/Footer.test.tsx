import { screen } from "@testing-library/react";
import Footer from "./Footer";
import { renderWithRouter } from "@/test/render-with-router";
import { describe, it, expect } from "vitest";

describe("Footer Component", () => {
    it("should render logo link", () => {
        renderWithRouter(<Footer />);

        const logoLink = screen.getByRole("link", { name: "learnUA" });

        expect(logoLink).toBeInTheDocument();
    })

    it("should render copyright text", () => {
        renderWithRouter(<Footer />);

        const copyright = screen.getByText("Copyright © 2025 - All right reserved");

        expect(copyright).toBeInTheDocument();
    })

    it("should render social icons", () => {
        renderWithRouter(<Footer />);
        const { container } = renderWithRouter(<Footer />);

        const socials = container.querySelectorAll("nav a svg");
        console.log(socials);
        expect(socials).toHaveLength(3);
    })
})