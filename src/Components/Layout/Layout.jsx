import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Test } from "../Test";
import { Loader } from "../Loader/Loader";
import { useAuth } from "../../hooks/useAuth";

export const Layout = () => {
  const { isUserLoading } = useAuth();
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="psychologists">Psychologists</NavLink>
            </li>
            <li>
              <NavLink to="favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {isUserLoading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Test />
      </main>
      <footer></footer>
    </>
  );
};
