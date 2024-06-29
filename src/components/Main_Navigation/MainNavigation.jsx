import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 s">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 border-2">
          <div className="flex items-center justify-between border-2">
            <div className="flex items-center justify-start rtl:justify-end">
              {/* Sidebar toggle button */}
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              {/* Logo */}
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white ">
                  Click & Connect
                </span>
              </a>
            </div>
            {/* User menu */}
            <div className="flex items-center border-2 border-orange-600">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            {/* Additional sidebar items */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0ZM6.143 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M1.293 6.707a1 1 0 0 1 1.414 0L9 13l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M15 8h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V5a5 5 0 0 1 10 0v3Zm-9 0h8V5a4 4 0 0 0-8 0v3ZM8 12v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">User</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M8.75 1.75a.75.75 0 0 0-1.5 0v.5h-3.5v-.5a.75.75 0 0 0-1.5 0v.5h-2a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-16a.75.75 0 0 0-.75-.75h-2v-.5Zm-8.25 5v-3h12.75v3h-12.75Zm.75 12v-9.5h11.25v9.5h-11.25Z" />
                  <path d="M3.5 14.75a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0v3a.75.75 0 0 0 .75.75Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M10 8a2 2 0 1 0-2 2 2 2 0 0 0 2-2Zm4 0a6 6 0 1 0-6 6 6 6 0 0 0 6-6ZM5.484 8a4.52 4.52 0 0 1-.5 2h-2.61a5.007 5.007 0 0 1 0-4h2.61a4.52 4.52 0 0 1 .5 2Zm1.016 4.899a4.505 4.505 0 0 1-1.57 1.57l-1.847-1.846a5.043 5.043 0 0 0 2.072-2.072l1.846 1.846Zm.5.5 1.847 1.846a5.007 5.007 0 0 1-4 0l1.846-1.846a4.52 4.52 0 0 1 .307.307Zm6.007-1.57a4.505 4.505 0 0 1-1.57 1.57l-1.846-1.846a5.043 5.043 0 0 0 2.072-2.072l1.846 1.846Zm.5.5a4.52 4.52 0 0 1 .5.5 4.52 4.52 0 0 1 .307-.307l1.846 1.846a5.007 5.007 0 0 1-4 0Zm.5-6.016a4.52 4.52 0 0 1 .5.5h2.61a5.007 5.007 0 0 0 0-4h-2.61a4.52 4.52 0 0 1-.5.5ZM5.484 2a4.52 4.52 0 0 1-.5.5 4.52 4.52 0 0 1 .307.307l-1.846 1.846a5.007 5.007 0 0 1 4 0Zm.5.5 1.846-1.847a5.007 5.007 0 0 0-4 0l1.846 1.847a4.52 4.52 0 0 1 .307-.307Zm6.007 1.846a4.505 4.505 0 0 0 1.57-1.57l1.846 1.846a5.043 5.043 0 0 1-2.072 2.072l-1.846-1.846Zm-.5-.5a4.52 4.52 0 0 1-.5-.5h-2.61a5.007 5.007 0 0 0 0 4h2.61a4.52 4.52 0 0 1 .5-.5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Pricing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M8.75 1.75a.75.75 0 0 0-1.5 0v.5h-3.5v-.5a.75.75 0 0 0-1.5 0v.5h-2a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-16a.75.75 0 0 0-.75-.75h-2v-.5Zm-8.25 5v-3h12.75v3h-12.75Zm.75 12v-9.5h11.25v9.5h-11.25Z" />
                  <path d="M3.5 14.75a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0v3a.75.75 0 0 0 .75.75Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Reports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14 0a6 6 0 0 0-4.97 9.35A7 7 0 0 0 0 16a7 7 0 0 0 7 7h10a6 6 0 0 0-3-11.18V6a4 4 0 0 0-4-4V1a5 5 0 0 1 5 5v2h-3a5 5 0 0 0-2 9.58v.84A4 4 0 1 1 10 16a4 4 0 0 1 4-4 4 4 0 0 1 3.58 5.42A6.03 6.03 0 0 0 14 18h-7a5 5 0 0 1-5-5 5 5 0 0 1 5-5h.5v-2H7a6 6 0 0 0-6 6 6 6 0 0 0 6 6h10a7 7 0 0 0 6.97-6.58A6 6 0 0 0 14 0ZM5.5 10H7v2H5.5a5 5 0 0 1-4.5-2.58 7 7 0 0 0 4.5.58Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default MainNavigation;
