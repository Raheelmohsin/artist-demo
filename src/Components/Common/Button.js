import React from "react";
import PropTypes from "prop-types";
const Button = ({
  text,
  onClick = null,
  className,
  disable = false,
  hasIcon,
  children,
  childrenClass
}) => {
  return (
    <button disabled={disable} className={className} onClick={onClick}>
      {text}
      {hasIcon && <span className={childrenClass}>{children}</span>}
    </button>
  );
};

const T = PropTypes;
Button.propTypes = {
  text: T.string,
  onClick: T.func,
  className: T.string,
  hasIcon: T.bool,
  children: T.element,
  childrenClass: T.string.isRequired
};
Button.defaultProps = {
  onClick: null,
  className: "",
  hasIcon: false,
  hasText: false,
  children: null
};

export default Button;
