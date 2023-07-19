import React from "react";
import RequiredStar from "./RequiredStar";
import PropTypes from "prop-types";

const FRow = ({ block, required, label, children }) => {
  return (
    <div className={`w-full flex flex-wrap items-start py-4`}>
      <div className={block ? " w-full" : "md:w-1/3"}>
        {required && <RequiredStar />}
        <span>{label}</span>
      </div>
      <div className={block ? " w-full" : "md:w-2/3"}>{children}</div>
    </div>
  );
};

export default FRow;

FRow.propTypes = {
  block: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
};
