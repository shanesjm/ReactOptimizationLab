import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "./UserCard";
import { act } from "react";
const user = {
  id: "980b82bf-d1af-4e66-ab93-004da059b275",
  username: "nberwick0",
  firstname: "Norton",
  lastname: "Berwick",
  email: "nberwick0@liveinternet.ru",
  avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
  role: "Subcontractor",
  join_date: "5/4/2023",
  description:
    "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
};

describe("UserCard Test Cases", () => {
  test("renders user information correctly", () => {
    //we need to use act since are using suspense
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UserCard user={user} onViewMore={jest.fn()} />);
    });

    const avatar = screen.getByRole("img", { name: /norton berwick/i });
    const name = screen.getByText<HTMLInputElement>(/norton berwick/i);
    const button = screen.getByRole("button", { name: /view more/i });

    expect(avatar).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("Call onViewMore when view more button is clicked", () => {
    const onViewMore = jest.fn();
    //we need to use act since are using suspense
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UserCard user={user} onViewMore={onViewMore} />);
    });

    const button = screen.getByRole("button", { name: /view more/i });
    fireEvent.click(button);
    expect(onViewMore).toHaveBeenCalledTimes(1);
  });
});
