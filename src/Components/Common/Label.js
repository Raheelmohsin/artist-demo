import React from "react";
import PropTypes from "prop-types";

const T = PropTypes;

const Label = ({ text, className, style, dataAttr }) => (
  <label className={className} style={style}>
    {text}
  </label>
);

Label.propTypes = {
  text: T.string.isRequired,
  className: T.string,
  style: T.instanceOf(Object)
};

Label.defaultProps = {
  className: "",
  style: null
};

export default Label;
