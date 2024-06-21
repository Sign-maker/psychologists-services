import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Test } from "../Test";
import { Loader } from "../Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import { Logo } from "../Logo/Logo";
import css from "./Layout.module.css";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { Filter } from "../Filter/Filter";

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <div className={`${css.wrapper} container`}>
          <div className={css.logoAndNavigationWrapper}>
            <Logo />
            <Navigation />
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <main>
        <Filter />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Test />
      </main>
      <footer></footer>
    </>
  );
};
