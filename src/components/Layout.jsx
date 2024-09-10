import { Outlet } from "react-router-dom";
import NavbarComp from "./NavbarComp";

function Layout() {
  return (
    <>
      <NavbarComp />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
