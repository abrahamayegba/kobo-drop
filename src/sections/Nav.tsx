import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const textLinkClasses =
    "text-gray-500 hover:text-gray-900 active:text-gray-400";

  const navLinks = [
    { href: "#features", children: "Features" },
    { href: "#partners", children: "Partners" },
    { href: "#reviews", children: "Reviews" },
  ];
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto">
            <div className="flex">
              <ButtonLink
                href="#"
                children={<img src={Kobodrop} alt="Kobodrop logo" />}
              />
            </div>
            <div className="ml-4 hidden items-center space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
              {navLinks.map((link, index) => (
                <ButtonLink
                  key={index}
                  href={link.href}
                  children={link.children}
                  className={textLinkClasses}
                />
              ))}
            </div>
            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children={"Install Kobodrop"}
              className="active:bg hidden rounded-xl bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
            />
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
