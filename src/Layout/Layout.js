import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export const contextStore = createContext();

const Layout = () => {
  const [city, setCity] = useState("London");
  return (
    <div className="container-fluid">
      <Header setCity={setCity} />
      <contextStore.Provider value={city}>
        <Outlet />
      </contextStore.Provider>
    </div>
  );
};

export default Layout;
