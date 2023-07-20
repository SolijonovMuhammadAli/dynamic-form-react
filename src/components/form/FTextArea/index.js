import React, { memo } from "react";
import PropTypes from "prop-types";
import TextArea from "./TextArea";
import _ from "lodash";
import ErrorText from "../ErrorText";

const FTextArea = ({ formik, name, ...props }) => {
  return (
    <div>
      <TextArea
        name={name}
        value={_.get(formik?.values, name)}
        onChange={formik.handleChange}
        {...props}
      />
      <ErrorText formik={formik} name={name} />
    </div>
  );
};

export default memo(FTextArea);

FTextArea.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
};
