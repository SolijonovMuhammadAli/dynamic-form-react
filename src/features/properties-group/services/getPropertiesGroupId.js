import { propertiesGroupRest } from "./propertiesGroupRest";
import { formFields } from "../data/constants";

const { getId } = propertiesGroupRest;

export const getPropertiesGroupId = (id, formik) => {
  getId(id).then((res) => {
    const data = res.data;
    formFields.forEach((field) => formik.setFieldValue(field, data[field]));
  });
};
