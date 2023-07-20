import React, { memo } from "react";
import PropTypes from "prop-types";
import Select from "./Select";
import ErrorText from "../ErrorText";
import _ from "lodash";

const FSelect = ({ formik, name, options, ...props }) => {
  return (
    <div>
      <Select
        name={name}
        options={options}
        value={_.get(formik?.values, name)}
        onChange={(val) => {
          formik.setFieldValue(name, val);
        }}
        isClearable
        {...props}
      />
      <ErrorText formik={formik} name={name} />
    </div>
  );
};

export default memo(FSelect);

FSelect.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.array,
};
