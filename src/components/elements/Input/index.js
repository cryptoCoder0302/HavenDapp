import React from "react";
import "./input.style.scss";

export default function Search(props) {
  return (
    <div className={`Textfield ${props.className}`}>
      <input
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
        type={props.value}
        style={{
          width: props.width,
        }}
      />
      {props.leftProps}
    </div>
  );
}
