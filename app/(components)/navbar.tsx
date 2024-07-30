import React from "react";

function NavBar(): React.JSX.Element {
  return (
    <div className="navbar bg-base-200 p-4 justify-center">
      <div className="max-w-screen-lg md:max-w-screen-md grow">
        <div className="navbar-start text-start">
          <a href="/" className="btn text-accent text-2xl">jobsie</a>
        </div>
        <div className="navbar-end text-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-accent btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu grow-0 w-[124px] dropdown-content rounded-box m-2 bg-base-300 shadow"
            >
              <a href="/aboutme" className="btn btn-ghost">
                About me
              </a>
              <a href="#contact" className="btn btn-primary">Contact</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
