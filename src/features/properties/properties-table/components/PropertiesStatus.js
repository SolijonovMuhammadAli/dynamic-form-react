import React from "react";
import PropTypes from "prop-types";

function PropertiesStatus({ status }) {
  return status ? (
    <span className="p-1 rounded-sm bg-blue-100 text-blue-500">Active</span>
  ) : (
    <span className="p-1 rounded-sm bg-red-100 text-red-500">Active emas</span>
  );
}

export default PropertiesStatus;

PropertiesStatus.propTypes = {
  status: PropTypes.bool,
};
