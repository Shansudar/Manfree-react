import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NavBar from "./components/NavBar";
import Users from "./pages/Users";
import User from "./pages/User";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import LoginContext from "./Context/LoginContext";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Wrapper from "./pages/Wrapper";
import Container from "./pages/Container";
import { Suspense } from "react";
import Parent from "./pages/Parent";
const Child = lazy(() => import("./pages/Child"));
const node = document.getElementById("root");
const root = ReactDOM.createRoot(node);
root.render(
  <LoginContext>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/products" element={<Products />}>
          <Route path=":name" element={<SingleProduct />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
        <Route
          path="/profile"
          element={
            <Container>
              <Profile />
            </Container>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/child"
          element={
            <Suspense fallback={<Parent />}>
              <Child />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </LoginContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
