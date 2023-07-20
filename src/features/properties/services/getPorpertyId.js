import { PropertyRest } from "../services/propertyRest";
import { formFields } from "../data/constants";

const { getProperty } = PropertyRest;

export const getPropertyId = (id, formik) => {
  getProperty(id).then((res) => {
    const data = res.data;
    formFields.forEach((field) => formik.setFieldValue(field, data[field]));
  });
};
