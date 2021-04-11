import "./Logo.css";
import logo from "../../assets/imgs/logo.png";
import React from "react";

export default (props) => (
  <aside className="logo">
    <a href="/">
      <img src={logo} alt="hagleysonLogo" />
    </a>
  </aside>
);
