import React from "react";
import PropTypes from "prop-types";
import RcSwitch from "rc-switch";
import "./assets/switch.css";

export default function Switch({ style, ...props }) {
  return <RcSwitch style={{ outline: "none", ...style }} {...props} />;
}

Switch.propTypes = {
  style: PropTypes.object,
};
