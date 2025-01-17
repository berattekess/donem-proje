import React from "react";
import Cards from "../Components/Cards";

function HomePage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh ",
      }}
    >
      <Cards showButtons={false} />;
    </div>
  );
}

export default HomePage;
