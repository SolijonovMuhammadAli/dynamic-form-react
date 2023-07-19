import React from "react";
import PropTypes from "prop-types";
import CardContent from "components/CardContent";
import FormManagement from "components/form/FormManagement";
import FRow from "components/form/FRow";

function PropertyGroupView({ formik }) {
  const { feilds, type, name } = formik.values;
  console.log(type);
  return (
    <CardContent title={name}>
      <div className={type ? "flex gap-2" : "block"}>
        {feilds.map(
          ({ label, value: { block, type, is_required, name } }, index) => (
            <FRow
              key={index}
              label={label}
              block={block}
              required={is_required}>
              <FormManagement type={type.value} formik={formik} name={name} />
            </FRow>
          )
        )}
      </div>
    </CardContent>
  );
}

export default PropertyGroupView;

PropertyGroupView.propTypes = {
  formik: PropTypes.object,
};
