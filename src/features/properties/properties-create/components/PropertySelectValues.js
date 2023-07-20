import React, { Fragment, useMemo, useState } from "react";
import CardContent from "components/CardContent";
import PropTypes from "prop-types";
import PropertySelectContent from "./PropertySelectContent";

function PropertySelectValues({ formik }) {
  const [optionsList, setOptionsList] = useState([]);

  const propertyTpye = useMemo(() => {
    return formik.values.type.value;
  }, [formik]);

  return (
    <Fragment>
      {(propertyTpye === "radio" || propertyTpye === "checkbox") && (
        <CardContent title="Maydon qiymatlari">
          <PropertySelectContent
            formik={formik}
            options={optionsList}
            onChange={setOptionsList}
            optionName="property_options"
          />
        </CardContent>
      )}
    </Fragment>
  );
}

export default PropertySelectValues;

PropertySelectValues.propTypes = {
  formik: PropTypes.object,
};
