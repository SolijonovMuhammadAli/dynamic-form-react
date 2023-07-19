import CardContent from "components/CardContent";
import FRow from "components/form/FRow";
import FormManagement from "components/form/FormManagement";
import React from "react";
import PropTypes from "prop-types";

function PropertyPreview({ formik }) {
  const { type, name, placeholder, block, is_required } = formik.values;
  return (
    <CardContent title="Oldindan ko'rinishi">
      {type && (
        <FRow label={name} block={block} required={is_required}>
          <FormManagement
            type={type.value}
            placeholder={placeholder}
            formik={formik}
            name="for_manag"
          />
        </FRow>
      )}
    </CardContent>
  );
}

export default PropertyPreview;

PropertyPreview.propTypes = {
  formik: PropTypes.object,
};
