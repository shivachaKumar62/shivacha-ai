import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";

const AppContent = ({ showingSidebar }) => {
  return (
    <div
      className={`max-h-[100vh] overflow-y-auto bg-[#F5F5F5] pt-[16px] rounded-[30px] px-[16px] pb-[40px] transition-width duration-300 flex-1`}
      style={{
        width: showingSidebar ? "calc(100% - 296px)" : "calc(100% - 92px)",
      }}
    >
      <Suspense>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              name={route.name}
              element={route.element}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(AppContent);
