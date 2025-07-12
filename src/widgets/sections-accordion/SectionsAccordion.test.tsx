import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import SectionsAccordion from "./SectionsAccordion";

vi.mock("@/entities/section/ui/NotSectionsCard", () => ({
  default: () => <div data-testid="not-sections-card">No sections available</div>,
}));

describe("SectionsAccordion Component", () => {
  const mockSections = [
    {
      id: 1,
      title: "Основи програмування",
      lessons: [
        { title: "Введення в програмування" },
        { title: "Змінні та типи даних" },
        { title: "Функції" },
      ],
    },
    {
      id: 2,
      title: "Просунутий рівень",
      lessons: [{ title: "ООП" }, { title: "Тестування" }],
    },
  ];

  it("should render sections accordion with heading", () => {
    render(<SectionsAccordion sections={mockSections} />);

    expect(screen.getByText("Секції курсу:")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Секції курсу:" })).toBeInTheDocument();
  });

  it("should render all sections", () => {
    render(<SectionsAccordion sections={mockSections} />);

    expect(screen.getByText("Основи програмування")).toBeInTheDocument();
    expect(screen.getByText("Просунутий рівень")).toBeInTheDocument();
  });

  it("should display correct lesson count for each section", () => {
    render(<SectionsAccordion sections={mockSections} />);

    expect(screen.getByText("3 уроків")).toBeInTheDocument();
    expect(screen.getByText("2 уроків")).toBeInTheDocument();
  });

  it("should render lessons when accordion is expanded", () => {
    render(<SectionsAccordion sections={mockSections} />);

    const firstCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstCheckbox);

    expect(screen.getByText("Введення в програмування")).toBeInTheDocument();
    expect(screen.getByText("Змінні та типи даних")).toBeInTheDocument();
    expect(screen.getByText("Функції")).toBeInTheDocument();
  });

  it("should display lesson numbers correctly", () => {
    render(<SectionsAccordion sections={mockSections} />);
    
    const firstCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstCheckbox);
    
    expect(screen.getAllByTestId("lesson-badge")).toHaveLength(5);
  });

  it("should handle sections without id", () => {
    const sectionsWithoutId = [
      {
        id: null,
        title: null,
        lessons: [{ title: "Тестовий урок" }],
      },
    ];
    
    render(<SectionsAccordion sections={sectionsWithoutId} />);
    
    expect(screen.getByText("Секція 1")).toBeInTheDocument();
  });
});
