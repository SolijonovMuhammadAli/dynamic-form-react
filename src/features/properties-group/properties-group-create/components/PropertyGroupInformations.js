import React from "react";
import PropTypes from "prop-types";
// import { inputTypes } from "data/constants";
import CardContent from "components/CardContent";
import FInput from "components/form/FInput";
import FRow from "components/form/FRow";
// import FSelect from "components/form/FSelect";
import FSwitch from "components/form/FSwitch";
import FTextArea from "components/form/FTextArea";
import FAutocomplete from "components/form/FAutocomplete";

function PropertyInformations({ formik }) {
  return (
    <CardContent title="Ummiy ma'lumotlar">
      <FRow label="Holati">
        <FSwitch formik={formik} name="status" />
      </FRow>
      <FRow label="Nomi" required>
        <FInput formik={formik} name="name" placeholder="Maydon guruhi nomi" />
      </FRow>
      <FRow label="Tavsif" required>
        <FTextArea
          formik={formik}
          name="description"
          placeholder="Maydon guruhi haqida"
        />
      </FRow>
      <FRow label="Maydonlar" required>
        <FAutocomplete
          placeholder="Maydon guruhi ichidagi maydonlar"
          formik={formik}
          name="feilds"
          url="/properties"
          searchName="name"
          isMulti
        />
      </FRow>
    </CardContent>
  );
}

export default PropertyInformations;

PropertyInformations.propTypes = {
  formik: PropTypes.object,
};
