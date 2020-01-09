import React from "react";
import PropTypes from "prop-types";
// import { ErrorInput } from "./index";

const InputField = ({
  maxLength,
  onChangeText,
  value,
  onBlur,
  error,
  className,
  placeholder,
  inputClass,
  hasValueClass,
  autoFocus
}) => {
  const errorClass = error ? " errorField " : "";
  const inputClasses = `formTextField ${inputClass} ${errorClass} ${
    value !== "" ? hasValueClass : ""
  }`;

  return (
    <div className={`${"formLabel "}${className}`}>
      <input
        maxLength={maxLength}
        className={inputClasses}
        onChange={onChangeText}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus={autoFocus}
      />

      {/* {error && (
        <ErrorInput
          error={error}
          fieldName={fieldText}
          validationMessage={validationMessage}
        />
      )} */}
    </div>
  );
};

const T = PropTypes;
InputField.propTypes = {
  maxLength: T.number,
  onChangeText: T.func,
  onBlur: T.func,
  className: T.string,
  error: T.string,
  placeholder: T.string,
  inputClass: T.string,
  autoFocus: T.bool
};
InputField.defaultProps = {
  maxLength: 50,
  onChangeText: () => {},
  className: "",
  onBlur: () => {},
  error: "",
  placeholder: "",
  inputClass: "",
  autoFocus: true
};
export default InputField;
