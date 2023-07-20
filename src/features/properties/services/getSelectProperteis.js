import { PropertyRest } from "../services/propertyRest";
// import { formFields } from "../data/constants";

const { get } = PropertyRest;

export const getSelectProperteis = (onChange = () => {}) => {
  get().then((res) => {
    const data = res.data.filter(({ type }) => type.value === "radio");
    onChange(formatData(data));
  });
};

const formatData = (data) => {
  return data.map((item) => ({ value: item, label: item.label }));
};
