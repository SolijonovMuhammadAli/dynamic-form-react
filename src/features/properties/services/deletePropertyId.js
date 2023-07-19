import { PropertyRest } from "../services/propertyRest";

const { deleteId } = PropertyRest;

export const deletePropertyId = (formik, callback) => {
  const { id } = formik.values;
  deleteId(id).then(() => callback());
};
