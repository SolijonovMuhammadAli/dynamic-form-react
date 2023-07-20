import React, { memo } from "react";
import PropTypes from "prop-types";
import AutoComplate from "./Autocomplete";
import _ from "lodash";
import ErrorText from "../ErrorText";

const FAutocomplete = ({ formik, name, disabled = false, ...props }) => {
  return (
    <div>
      <AutoComplate
        name={name}
        value={_.get(formik.values, name)}
        onChange={(val) => formik.setFieldValue(name, val)}
        error={
          _.get(formik.errors, name) && Boolean(_.get(formik.touched, name))
        }
        isClearable
        disabled={disabled}
        {...props}
      />
      <ErrorText formik={formik} name={name} />
    </div>
  );
};

export default memo(FAutocomplete);

FAutocomplete.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};
