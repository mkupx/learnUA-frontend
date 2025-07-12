import Hero from "./Hero";
import { renderWithRouter } from "@/test/render-with-router";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

describe("Hero Component", () => {
    it("should render hero texts", () => {
        renderWithRouter(<Hero />);
        expect(screen.getByText("LearnUA — українська платформа онлайн-курсів")).toBeInTheDocument();
        expect(screen.getByText("Вчися новому, розвивай навички та отримуй сертифікати, не виходячи з дому. Якісні курси від провідних експертів для твого професійного та особистого зростання.")).toBeInTheDocument();

        const button = screen.getByRole("button", { name: "Переглянути курси" });
        expect(button).toBeInTheDocument();
    })
})