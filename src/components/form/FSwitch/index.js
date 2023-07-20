import PropTypes from "prop-types";
import React, { memo } from "react";
import Switch from "./Switch";
import _ from "lodash";

const FSwitch = ({ formik, name, ...props }) => {
  return (
    <div>
      <Switch
        name={name}
        checked={_.get(formik?.values, name)}
        onChange={(val) => formik?.setFieldValue(name, val)}
        isclearable={"true"}
        {...props}
      />
      <div className="min-h-6" />
    </div>
  );
};

export default memo(FSwitch);

FSwitch.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
};
