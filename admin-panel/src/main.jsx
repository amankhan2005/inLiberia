 import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import {

  BrowserRouter

} from "react-router-dom";

import {

  AdminAuthProvider

} from "./context/AdminAuthContext";
import "./style.css";

 

ReactDOM.createRoot(

document.getElementById("root")

).render(


<BrowserRouter>

<AdminAuthProvider>

<App />

</AdminAuthProvider>

</BrowserRouter>

);