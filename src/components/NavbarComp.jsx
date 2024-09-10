import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/book-records"}>Book records</Link>
            </li>
            <li>
              <Link to={"/author-records"}>Author records</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Admin Dashboard</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-1">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="ml-1 mr-1">
            <Link to={"/book-records"}>Book records</Link>
          </li>
          <li className="ml-1">
            <Link to={"/author-records"}>Author records</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
}

export default NavbarComp;
