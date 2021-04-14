import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";
export default function Nav(props) {
  return (
    <aside className="menu-area">
      {/*Refatorar */}
      <nav className="menu">
        <NavItem icon="home" desc="Início" url="/" />
        <NavItem icon="users" desc="Usuários" url="/users" />
      </nav>
    </aside>
  );
}
