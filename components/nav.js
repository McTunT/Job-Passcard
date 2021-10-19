import { Disclosure } from "@headlessui/react"
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"

const navigation = [
  { name: "ABOUT US", href: "/about" },
  { name: "PASSCARD", href: "/passcard" },
  { name: "PROFILE", href: "/profile" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white border-b">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0  items-center flex">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/logo.png"
                    alt="logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/logo.png"
                    alt="logo"
                  />
                  <span className="mr-2 flex text-xl">
                    <p className="font-medium mr-1">Job</p>
                    <span className="ffont-extralight text-gray-500">
                      Passcard
                    </span>
                  </span>
                </div>
                <div className="hidden sm:block sm:ml-6 flex-1">
                  <div className="flex space-x-4 flex items-center justify-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-green-400 hover:text-white",
                          "px-1 lg:px-3 py-2 rounded-md text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="p-3 rounded-full text-gray-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="p-3 rounded-full text-gray-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Shopping Cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="grid grid-cols-2 divide-x divide-gray-300 hidden sm:flex">
                  <div className="mr-1">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-green-400 hover:text-white uppercase">
                      Login
                    </a>
                  </div>
                  <div className="">
                    <a className="ml-1 px-3 rounded-md py-2 text-sm font-medium text-black hover:bg-green-400 hover:text-white uppercase">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-green-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
