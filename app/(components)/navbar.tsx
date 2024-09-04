import Link from "next/link";
import React from "react";

function NavBar(): React.JSX.Element {
  return (
    <div className="navbar p-2 lg:p-4 px-8 lg:px-24 justify-center backdrop-blur-xl bg-base-100/70 sticky top-0 z-50 border-b-2 border-base-100/50">
      <div className="max-w-screen-lg lg:max-w-screen-lg grow">
        <div className="navbar-start text-start">
          <Link
            href="/"
            className="btn btn-ghost btn-lg text-2xl text-base-content font-mono font-light"
          >
            jobsie
          </Link>
        </div>
        <div className="navbar-end text-base-content text-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-xl">
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

            <ul className="menu w-40 font-mono bg-base-200/60 p-2 dropdown-content mt-8 rounded-box gap-2 shadow">
              <Link href="/aboutme" className="btn rounded-box w-full">
                About me
              </Link>
              <Link href="#contact" className="btn rounded-box btn-primary w-full">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
