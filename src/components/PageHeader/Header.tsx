import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import DropdownMenu from "../UI/DropdownMenu";
import { headerDropdownMenuItems, headerNavigation } from "./config";
import siteLogo from "../../assets/icons/samurai-logo.png";
import avatarPlaceholder from "../../assets/images/user_avatar_placeholder.jpg";

// types
import { PageHeaderProps } from "./interface/interface";

function Header({ currentPath }: PageHeaderProps) {
  return (
    <Disclosure as="nav" className="bg-primary-400 shadow-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open Menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-secondary"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-secondary"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto"
                    src={siteLogo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {headerNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href === currentPath
                            ? "bg-accent-500 text-secondary"
                            : "text-secondary hover:text-primary-500 hover:bg-secondary",
                          "px-3 py-2 rounded-sm text-sm font-medium"
                        )}
                        aria-current={
                          item.href === currentPath ? "page" : undefined
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DropdownMenu
                  items={headerDropdownMenuItems}
                  buttonImage={avatarPlaceholder}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {headerNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.href === currentPath
                      ? "bg-accent-500 text-secondary"
                      : "text-white hover:text-primary-400 hover:bg-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.href === currentPath ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default React.memo(Header);
