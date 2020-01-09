import React from "react";
import PropTypes from "prop-types";
const Button = ({
  text,
  onClick = null,
  className,
  disable = false,
  hasIcon,
  children
}) => {
  return (
    <button disabled={disable} className={className} onClick={onClick}>
      {text}
      {hasIcon && <span>{children}</span>}
    </button>
  );
};

const T = PropTypes;
Button.propTypes = {
  text: T.string,
  onClick: T.func,
  className: T.string,
  hasIcon: T.bool,
  children: T.element
};
Button.defaultProps = {
  onClick: null,
  className: "",
  hasIcon: false,
  hasText: false,
  children: null
};

export default Button;
