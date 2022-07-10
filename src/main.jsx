import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Game, Mint } from "./pages";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index  element={<Home />} />
          <Route path="play" element={<Game />} />
          <Route path="mint" element={<Mint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
