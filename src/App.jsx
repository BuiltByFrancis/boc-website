import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div>
      <h2 className="text-black">App</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/play">Play</Link> | <Link to="/mint">Mint</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
