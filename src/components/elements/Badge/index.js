import React from "react";
import PropTypes from "prop-types";
import './badge.style.scss'
import icon from "assets/images/ICON_Farm_2.png";

export default function Badge(props) {
  return (
    <div className="badge-costume">
      <img
        src={icon}
        alt="icon-badge"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

Badge.defaultProps = {
  width: 75,
  name: 75,
};
Badge.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
