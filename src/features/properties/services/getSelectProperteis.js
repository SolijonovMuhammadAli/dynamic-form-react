import { PropertyRest } from "../services/propertyRest";
// import { formFields } from "../data/constants";

const { getProperties } = PropertyRest;

export const getSelectProperteis = (onChange = () => {}) => {
  getProperties().then((res) => {
    const data = res.data.filter(({ type }) => type.value === "radio");
    onChange(formatData(data));
  });
};

const formatData = (data) => {
  return data.map((item) => ({ value: item, label: item.label }));
};
