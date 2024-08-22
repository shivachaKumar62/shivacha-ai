import React, { Suspense } from "react";
import {
  Navigate,
  BrowserRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../routes";

const AppContent = () => {
  return (
    <div className=" bg-[#F1F4F9] ">
      <Suspense fallback={<CSpinner color="primary" />}>
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
