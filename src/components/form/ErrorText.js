import React, { memo } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const ErrorText = ({ formik, name }) => {
  return (
    <div className="min-h-6 w-full text-red-500 font-md">
      {(_.get(formik?.errors, name) && _.get(formik?.errors, name)) ?? " "}
    </div>
  );
};

export default memo(ErrorText);

ErrorText.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
};
