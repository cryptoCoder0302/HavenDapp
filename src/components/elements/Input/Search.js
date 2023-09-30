import React from "react";
import "./input.style.scss";
import SearchIcons from "components/icons/Search";
export default function Search(props) {
  return (
    <div className={`Textfield ${props.className}`}>
      <input
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
        style={{
          width: props.width,
        }}
      />
      <SearchIcons width="30px" height="30px" />
    </div>
  );
}
