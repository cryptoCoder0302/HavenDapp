import React from "react";
import "./titlePage.style.scss";

import { Link } from "react-router-dom";

import Back from "components/icons/Back";
import Badge from "../Badge";

export default function TitlePage(props) {
  return (
    <div className="title-page">
      <Link to={props.to}>
        <Back width="30px" height="30px" />
      </Link>
      <p className="title">{props.title}</p>
      <div className="icon">
        <Badge width={100} height={100} />
      </div>
    </div>
  );
}
