import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/About/AboutUs";
import Layout from "./Layouts/Layout";
import Contact from "./components/Contact/Contact";
import Github, { githubInfo } from "./components/Github/Github";
import User from "./components/User/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<Layout />>
      <Route path="" element=<Home /> />
      <Route path="about" element=<AboutUs /> />
      <Route path="contact" element=<Contact /> />
      <Route loader={githubInfo} path="github" element=<Github /> />
      <Route path="user/:id" element=<User /> />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
