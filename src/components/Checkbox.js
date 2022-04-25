import PropTypes from "prop-types"
import React from "react";
import "../styles/Checkbox.css";

export default function Checkbox({onClick, children, checked}) {
  return (
    <label className="container">
      <input type="checkbox" onClick={onClick} checked={checked}/>
      <div className="checkmark"></div>
      {children}
    </label>
  );
}

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  checked: PropTypes.bool,
}
