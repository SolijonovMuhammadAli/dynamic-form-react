import React, { memo } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ErrorText from "../ErrorText";
import Input from "./Input";
import { Fragment } from "react";

const FInput = ({ formik, name, ...props }) => {
  return (
    <Fragment>
      <Input
        name={name}
        value={_.get(formik?.values, name)}
        onChange={formik.handleChange}
        {...props}
      />
      <ErrorText formik={formik} name={name} />
    </Fragment>
  );
};

export default memo(FInput);

FInput.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.any,
};
