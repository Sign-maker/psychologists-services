import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      Layout
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
