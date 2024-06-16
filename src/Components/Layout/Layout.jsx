import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { Test } from "../Test";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  return (
    <>
      <header></header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* <Test /> */}
      </main>
      <footer></footer>
    </>
  );
};
