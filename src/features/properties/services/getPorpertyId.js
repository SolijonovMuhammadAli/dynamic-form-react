import { PropertyRest } from "../services/propertyRest";
import { formFields } from "../data/constants";

const { getId } = PropertyRest;

export const getPropertyId = (id, formik) => {
  getId(id).then((res) => {
    const data = res.data;
    formFields.forEach((field) => formik.setFieldValue(field, data[field]));
  });
};
