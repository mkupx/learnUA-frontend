import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      {component}
    </MemoryRouter>
  );
};