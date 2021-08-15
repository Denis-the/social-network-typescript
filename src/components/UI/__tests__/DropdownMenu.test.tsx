import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import DropdownMenu from "../DropdownMenu";
import { DropdownMenuItem } from "../interface/DropdownMenu";
import avatarPlaceholder from "../../../assets/images/user_avatar_placeholder.jpg";

const dropdownItems: DropdownMenuItem[] = [
  { title: "item1", to: "/url1" },
  { title: "item2", to: "/url2" },
  { title: "item3", to: "/url3" },
];

function DropdownWithTextButton() {
  return (
    <DropdownMenu
      items={dropdownItems}
      buttonName="open button"
      buttonType="primary"
    />
  );
}

function DropdownWithIcon() {
  return <DropdownMenu items={dropdownItems} buttonImage={avatarPlaceholder} />;
}

describe("Dropdownmenu tests", () => {
  test("after mount shows open button without items", () => {
    render(<DropdownWithTextButton />);
    expect(screen.queryByText("open button")).toBeTruthy();
    dropdownItems.forEach((item) =>
      expect(screen.queryByText(item.title)).not.toBeTruthy()
    );
    cleanup();
  });

  test("after mount shows an image icon without items", () => {
    render(<DropdownWithIcon />);
    expect(screen.queryAllByAltText("icon")).toBeTruthy();
    dropdownItems.forEach((item) =>
      expect(screen.queryByText(item.title)).not.toBeTruthy()
    );
    cleanup();
  });

  test("after click shows menu with items", () => {
    render(<DropdownWithTextButton />);
    const btn = screen.getByText("open button");

    fireEvent.click(btn);

    expect(btn).toBeTruthy();
    dropdownItems.forEach((item) =>
      expect(screen.queryByText(item.title)).toBeTruthy()
    );
    cleanup();
  });

  test("menu items must be rendered as links", () => {
    render(<DropdownWithTextButton />);
    const btn = screen.getByText("open button");

    fireEvent.click(btn);

    expect(btn).toBeTruthy();
    dropdownItems.forEach((item) => {
      const link = screen
        .getByText(item.title)
        .closest("a")
        ?.getAttribute("href");
      expect(link).toBe(item.to);
    });
  });

  test("after second click hides menu after animation", async () => {
    render(<DropdownWithTextButton />);
    const btn = screen.getByText("open button");

    fireEvent.click(btn);

    expect(btn).toBeTruthy();
    dropdownItems.forEach((item) =>
      expect(screen.queryByText(item.title)).toBeTruthy()
    );

    fireEvent.click(btn);

    expect(btn).toBeTruthy();

    await waitFor(() => expect(screen.queryByText("item1")).not.toBeTruthy());
    await waitFor(() => expect(screen.queryByText("item2")).not.toBeTruthy());
    await waitFor(() => expect(screen.queryByText("item3")).not.toBeTruthy());

    cleanup();
  });
});
