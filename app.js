import React from "react";
import ReactDOM  from "react-dom/client";
import Layout from "./src/Layout";
import { SideMenuProvider } from "./src/SideMenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(

    <React.StrictMode>
      <SideMenuProvider>
        <Layout />
      </SideMenuProvider>
    </React.StrictMode>,
)