import React from "react";
import "./box.style.scss";

export default function index(props) {
  return <div className={`box ${props.className}`}>{props.children}</div>;
}
