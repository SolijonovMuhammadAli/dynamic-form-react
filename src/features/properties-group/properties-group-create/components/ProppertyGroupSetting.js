import CardContent from "components/CardContent";
import PropTypes from "prop-types";
import React from "react";

function ProppertyGroupSetting({ formik }) {
  const { feilds } = formik.values;
  console.log(feilds);
  return (
    <CardContent title="Qo'shimcha sozlamalar">
      Propperty Group Setting
    </CardContent>
  );
}

export default ProppertyGroupSetting;
ProppertyGroupSetting.propTypes = {
  formik: PropTypes.object,
};
