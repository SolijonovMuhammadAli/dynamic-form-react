import React from "react";
import PropTypes from "prop-types";
import { inputTypes } from "data/constants";
import CardContent from "components/CardContent";
import FInput from "components/form/FInput";
import FRow from "components/form/FRow";
import FSelect from "components/form/FSelect";
import FSwitch from "components/form/FSwitch";
import FTextArea from "components/form/FTextArea";

function PropertyInformations({ formik }) {
  return (
    <CardContent title="Ummiy ma'lumotlar">
      <FRow label="Holati">
        <FSwitch formik={formik} name="status" />
      </FRow>
      <FRow label="Maydon nomi" required>
        <FInput formik={formik} name="name" />
      </FRow>
      <FRow label="Turi" required>
        <FSelect formik={formik} name="type" options={inputTypes} />
      </FRow>
      <FRow label="Tavsif" required>
        <FTextArea formik={formik} name="description" />
      </FRow>
      <FRow label="Sarlavha" required>
        <FInput formik={formik} name="label" />
      </FRow>
      <FRow label="To'ldiruvchi">
        <FInput formik={formik} name="placeholder" />
      </FRow>
      <FRow label="Joylashuv turi(inline/block)">
        <FSwitch formik={formik} name="block" />
      </FRow>
      <FRow label="Majburiy maydon">
        <FSwitch formik={formik} name="is_required" />
      </FRow>
    </CardContent>
  );
}

export default PropertyInformations;

PropertyInformations.propTypes = {
  formik: PropTypes.object,
};
