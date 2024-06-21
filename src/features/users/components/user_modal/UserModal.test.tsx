import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import UserModal from "./UserModal";
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

describe("UserModal Test Cases", () => {
  test("Checks if UserModal displays user information correctly", () => {
    //we need to use act since are using suspense
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UserModal user={user} open={true} onClose={jest.fn()} />);
    });

    const avatar = screen.getByRole("img", { name: /norton berwick/i });
    const name = screen.getByText(/norton berwick/i);
    const description = screen.getByText(/commodo/i);
    const joinDate = screen.getByText(/joined: 5\/4\/2023/i);

    expect(avatar).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(joinDate).toBeInTheDocument();
  });
});
