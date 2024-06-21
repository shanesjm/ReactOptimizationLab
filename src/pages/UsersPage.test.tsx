import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../store/store";
import UsersPage from "./UsersPage";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe("UsersPage Integration Test", () => {
  test('Renders users and opens modal on clicking "View More" button', async () => {
    renderWithProviders(<UsersPage />);
    const card = await screen.findByText(/norton berwick/i);
    expect(card).toBeInTheDocument();

    const button = screen.getAllByRole("button", { name: /view more/i })[0];
    fireEvent.click(button);

    expect(await screen.findByText(/commodo/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Vestibulum sed magna/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/joined: 5\/4\/2023/i)).toBeInTheDocument();
  });
});
