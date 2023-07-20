import React from "react";
import PropTypes from "prop-types";
import CardContent from "components/CardContent";
import FormManagement from "components/form/FormManagement";
import FRow from "components/form/FRow";
import Grid from "@mui/material/Grid";

function PropertyGroupView({ formik }) {
  const { feilds, name } = formik.values;
  return (
    <CardContent title={name}>
      <Grid container spacing={2}>
        {feilds.map(
          (
            {
              label,
              value: {
                block,
                type,
                is_required,
                name,
                col_width,
                placeholder,
                property_options,
              },
            },
            index
          ) => (
            <Grid item xs={col_width ? col_width : 12} key={index}>
              <FRow label={label} block={block} required={is_required}>
                <FormManagement
                  type={type.value}
                  formik={formik}
                  name={name}
                  property_options={property_options}
                  placeholder={placeholder}
                />
              </FRow>
            </Grid>
          )
        )}
      </Grid>
    </CardContent>
  );
}

export default PropertyGroupView;

PropertyGroupView.propTypes = {
  formik: PropTypes.object,
};
