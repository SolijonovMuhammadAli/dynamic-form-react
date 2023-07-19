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
        error={
          _.get(formik?.errors, name) &&
          Boolean(_.get(formik.errors, name)).toString()
        }
        {...props}
      />
      <ErrorText formik={formik} name={name} />
    </Fragment>
  );
};

export default FInput;
