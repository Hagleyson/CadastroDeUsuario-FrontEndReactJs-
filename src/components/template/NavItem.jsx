import React from "react";
import { Link } from "react-router-dom";
export default function NavItem(props) {
  return (
    <Link to={props.url}>
      <i className={`fa fa-${props.icon}`}> </i> {props.desc}
    </Link>
  );
}
