import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSun,
  faMoon,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [dark, setDark] = useState(JSON.parse (localStorage.getItem('dark')) || false);

  const hiddenClass = "dropdown hidden w-full pt-14 bg-gray-900";
  const showClass =
    "dropdown w-full bg-gray-900 dark:bg-gray-100 shadow-lg dark-shadow-lg tab:hidden";
  const activeClass = "text-indigo-700";
  const darkActiveClass = "text-white";

  useEffect(() => {
    localStorage.setItem("dark", dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <>
      <div className="fixed w-screen">
        <div className="h-16 bg-gray-900 dark:bg-gray-100 tab:shadow-md tab:drop-shadow-md flex justify-center items-center ">
          <a
            href="/"
            className="text-white dark:text-black font-primry font-semibold text-3xl pl-5 inline-block absolute left-2 max-tab:justify-center max-tab:flex max-tab:left-0"
          >
            Filmify
          </a>
          <div className="tab:hidden absolute right-10 flex gap-4">
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              {dark ? (
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
              ) : (
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="xl"
                  style={{ color: "#ffffff" }}
                />
              )}
            </button>
            <button
              onClick={() => {
                setDark(!dark);
              }}
            >
              {dark ? (
                <FontAwesomeIcon icon={faMoon} size="xl" />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              )}
            </button>
            <button onClick={handleClick}>
              {dark ? (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  size="xl"
                  style={{ color: "#000" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  size="xl"
                  style={{ color: "#fff" }}
                />
              )}
            </button>
          </div>

          <ul className="flex h-full items-center text-gray-500 dark:text-gray-700 font-primry justify-center font-semibold max-tab:hidden">
            <NavLink
              className={({ isActive }) =>
                isActive ? (dark ? activeClass : darkActiveClass) : ""
              }
              to="/"
            >
              <li className="px-3 hover:text-white dark:hover:text-indigo-700">
                Home
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? (dark ? activeClass : darkActiveClass) : ""
              }
              to="/upcoming"
            >
              <button className="px-3 hover:text-white dark:hover:text-indigo-700">
                Upcoming
              </button>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? (dark ? activeClass : darkActiveClass) : ""
              }
              to="/toprated"
            >
              <li className="px-3 hover:text-white dark:hover:text-indigo-700">
                Top Rated
              </li>
            </NavLink>
          </ul>

          <div className="searchbar absolute right-10 flex gap-6  max-tab:hidden">
            <button
              onClick={() => {
                setDark(!dark);
              }}
            >
              {dark ? (
                <FontAwesomeIcon icon={faMoon} size="xl" />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              )}
            </button>
            <div className="search pr-3">
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-es-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    name='search'
                    className="block p-2 pl-10 text-sm font-semibold h-8 dark:text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-gray-900 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Movies"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className={show ? showClass : hiddenClass}>
          <ul className="h-full text-gray-500 text-lg font-primry flex flex-col gap-2 font-semibold w-full">
            <li className="w-full flex justify-center pl-4">
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-es-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    name='search'
                    className="block p-2 pl-10 text-sm font-semibold h-8 dark:text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-gray-900 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Movies"
                    required
                  />
                </div>
              </form>
            </li>
            <NavLink
              to="/"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? (dark ? activeClass : darkActiveClass) : ""
              }
            >
              <li className="hover:text-white text-center  dark:hover:text-indigo-700">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/upcoming"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? (dark ? activeClass : darkActiveClass) : ""
              }
            >
              <li className=" hover:text-white text-center dark:hover:text-indigo-700">
                Upcoming
              </li>
            </NavLink>
            <NavLink
              to="/toprated"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? (dark ? activeClass : darkActiveClass) : ""
              }
            >
              <li className="hover:text-white text-center mb-2  dark:hover:text-indigo-700">
                Top Rated
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
