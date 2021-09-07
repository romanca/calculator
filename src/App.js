import React from "react";
import Layout from "./components/layout";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom right,blue, purple)",
        backgroundSize: "cover",
      }}
    >
      <Layout />
    </div>
  );
};

export default App;
