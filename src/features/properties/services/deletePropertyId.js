import { PropertyRest } from "../services/propertyRest";

const { deleteProperty } = PropertyRest;

export const deletePropertyId = (formik, callback) => {
  const { id } = formik.values;
  deleteProperty(id).then(callback);
};
