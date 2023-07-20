import React from "react";
import PropTypes from "prop-types";

function Input({
  disabled,
  placeholder,
  type = "text",
  value,
  onChange,
  ...rest
}) {
  return (
    <div className="">
      <input
        className="focus:outline-none w-full border-gray-200  border-2 rounded-md px-2 py-1"
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
