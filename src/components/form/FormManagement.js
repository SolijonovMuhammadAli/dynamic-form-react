import React, { memo } from "react";
import PropTypes from "prop-types";
import FSelect from "./FSelect";
import FInput from "./FInput";
import FSwitch from "./FSwitch";
import FTextArea from "./FTextArea";

function FormManagement(props) {
  const { type, property_options } = props;
  switch (type) {
    case "radio":
      return <FSelect options={property_options} {...props} />;
    case "checkbox":
      return <FSelect options={property_options} isMulti {...props} />;
    case "boolean":
      return <FSwitch {...props} />;
    case "string":
      return <FInput {...props} />;
    case "textarea":
      return <FTextArea {...props} />;
    case "number":
      return <FInput type="number" {...props} />;
    case "date":
      return <FInput type="date" {...props} />;
    default:
      <FInput {...props} />;
  }
}

export default memo(FormManagement);

FormManagement.propTypes = {
  type: PropTypes.any,
  property_options: PropTypes.any,
};
