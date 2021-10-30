import React from "react";

import "./input.styles.scss";

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="input-container">
      <input className="input-field" onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
