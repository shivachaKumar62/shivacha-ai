import React, { Suspense } from "react";
import {
  Navigate,
  BrowserRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";


// routes config
import routes from "../routes";

const AppContent = () => {
  return (
    <div className=" bg-[#F5F5F5]  px-[24px] ">
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
