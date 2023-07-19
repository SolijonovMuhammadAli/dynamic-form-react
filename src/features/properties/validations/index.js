import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Ma'lumot to'ldirilmagan"),
  type: Yup.mixed().required("Ma'lumot to'ldirilmagan"),
  description: Yup.string().required("Ma'lumot to'ldirilmagan"),
  label: Yup.string().required("Ma'lumot to'ldirilmagan"),
  placeholder: Yup.string().required("Ma'lumot to'ldirilmagan"),
});
