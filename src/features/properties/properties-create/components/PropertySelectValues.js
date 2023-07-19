import React, { useEffect, useMemo, useState } from "react";
import CardContent from "components/CardContent";
import PropTypes from "prop-types";
import PropertySelectContent from "./PropertySelectContent";

function PropertySelectValues({ formik }) {
  const [optionsList, setOptionsList] = useState([{ name: "", value: "" }]);

  const propertyTpye = useMemo(() => {
    return formik.values.type.value;
  }, [formik]);

  useEffect(() => {
    const options = formik.values.property_options;
    setOptionsList(options);
  }, []);

  if (propertyTpye === "radio" || propertyTpye === "checkbox")
    return (
      <CardContent title="Maydon qiymatlari">
        <PropertySelectContent
          formik={formik}
          value={optionsList}
          onChange={setOptionsList}
        />
      </CardContent>
    );
  return null;
}

export default PropertySelectValues;

PropertySelectValues.propTypes = {
  formik: PropTypes.object,
};
