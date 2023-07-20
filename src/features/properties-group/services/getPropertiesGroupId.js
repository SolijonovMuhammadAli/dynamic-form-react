import { propertiesGroupRest } from "./propertiesGroupRest";
import { formFields } from "../data/constants";

const { getPropertyGroup } = propertiesGroupRest;

export const getPropertiesGroupId = (id, formik) => {
  getPropertyGroup(id).then((res) => {
    const data = res.data;
    formFields.forEach((field) => formik.setFieldValue(field, data[field]));
  });
};
