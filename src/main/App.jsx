import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import { HashRouter } from "react-router-dom";
import Routes from "./Routers";
export default function App(props) {
  return (
    <HashRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}
