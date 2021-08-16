import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { DropdownMenuProps } from "./interface/DropdownMenu";

function DropdownMenu({
  buttonName,
  buttonImage,
  buttonType,
  items,
}: DropdownMenuProps) {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button
          className={classNames(
            buttonType === "secondary"
              ? "bg-secondary text-primary-400"
              : "bg-primary-400 text-secondary",
            "font-medium flex text-sm rounded-sm"
          )}
        >
          {buttonImage ? (
            <img
              className="h-8 w-8 rounded-full"
              src={buttonImage}
              alt="icon"
            />
          ) : (
            <span className="p-1">{buttonName}</span>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-sm shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map(({ title, to }) => (
            <Menu.Item key={title}>
              {({ active }) => (
                <NavLink
                  to={to}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {title}
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
DropdownMenu.defaultProps = {
  buttonName: "Menu",
  buttonType: "secondary",
};

export default React.memo(DropdownMenu);
