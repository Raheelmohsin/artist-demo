import React from "react";
import PropTypes from "prop-types";

const Image = ({ imgSource, alt, className }) => (
  <img className={className} alt={alt} src={imgSource} />
);

Image.propTypes = {
  imgSource: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

Image.defaultProps = {
  className: ""
};

export default Image;
