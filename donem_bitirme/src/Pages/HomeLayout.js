import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh ",
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;

