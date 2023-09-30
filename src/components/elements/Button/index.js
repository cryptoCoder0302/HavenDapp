import React from "react";
import "./button.style.scss";
import classnames from "classnames";

const Button = (props) => {
  const { fullwidth, buttonType, basic } = props;

  const className = classnames(!basic ? "btn-bog" : "btn-basic", {
    fullwidth: fullwidth,
    [`btn-${buttonType ?? "golden"}`]: !basic && true,
    [`btn-basic-${buttonType ?? "golden"}`]: basic && true,
    "font-responsive": props.responsive,
    "text-dark": props.darkColor 
  });

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={className}
    >
      {props.children}
    </button>
  );
};
// style="font-size:1.6em;"
export default Button;
