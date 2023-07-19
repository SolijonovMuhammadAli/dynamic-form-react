import React from "react";
import FSelect from "./FSelect";
import FInput from "./FInput";
import FSwitch from "./FSwitch";
import FTextArea from "./FTextArea";

function FormManagement(props) {
  const { type } = props;
  switch (type) {
    case "radio":
      return <FSelect {...props} />;
    case "checkbox":
      return <FSelect isMulti {...props} />;
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

export default FormManagement;
