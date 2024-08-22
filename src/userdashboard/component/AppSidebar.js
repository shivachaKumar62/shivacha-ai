import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from "@coreui/react";
import { AppSidebarNav } from "./AppSidebarNav";
import Nav from "../Nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="border-end "
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
      style={{ backgroundColor: "#fff" }}
    >
      <CSidebarHeader
        className="border-bottom "
        style={{ backgroundColor: "#fff" }}
      >
        <CSidebarBrand to="/">
          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} /> */}
          <div >
            <img
              src={process.env.PUBLIC_URL+"./image/navbar/nav-logo.png"}
              className="w-[200px]"
            />
          </div>
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: "set", sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={Nav} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
