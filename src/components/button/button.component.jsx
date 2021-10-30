import React from "react";

import "./button.styles.scss";

const Button = ({ children, customClass, ...otherProps }) => {
  return (
    <button className={`button ${customClass || ""}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
