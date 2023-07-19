import React from "react";
import PropTypes from "prop-types";

export default function TextArea({
  className,
  disabled,
  onChange,
  value,
  ...rest
}) {
  return (
    <div
      className={`
            border
            bg-white
            flex
            space-x-2
            items-center
            rounded-lg
            text-body
            relative
            px-2
            p-1
            w-full
            font-smaller
            focus-within:ring
            focus-within:outline-none
            transition
            focus-within:border-blue-300
            ${className}
        `}>
      {disabled ? (
        <div
          className="absolute inset-0 rounded-md"
          style={{ backgroundColor: "rgba(221, 226, 228, 0.5)", margin: 0 }}
        />
      ) : (
        <></>
      )}
      <textarea
        value={value}
        onChange={onChange}
        className="w-full outline-none"
        type="text"
        readOnly={disabled}
        {...rest}
      />
    </div>
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
