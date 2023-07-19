import React from "react";
import PropTypes from "prop-types";
import Input from "components/form/FInput/Input";

function PropertySelectContent({ value, onChange = () => {}, formik }) {
  const onAddOption = () => {
    if (value) onChange((old) => [...old, { name: "", value: "" }]);
    else onChange([{ value: "", name: "" }]);
  };

  const onRemoveOption = (index = 0) => {
    if (value.length !== 1) {
      onChange((old) => old.filter((el, i) => i !== index));
    }
  };

  const onOptionChange = (e, key, index) => {
    onChange((el) =>
      el.map((item, i) =>
        index === i ? { ...item, [key]: e.target.value } : item
      )
    );
  };

  return (
    <div>
      {value?.length > 0 ? (
        value.map(({ name, value }, index) => (
          <div className="flex mb-6" key={index}>
            <div className="rounded-lg border border-gray-200 p-5 flex-grow">
              <div className="w-full flex items-center">
                <div className="w-1/3">label</div>
                <div className="w-2/3">
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      formik.setFieldValue("property_options", value);
                      onOptionChange(e, "name", index);
                    }}
                  />
                </div>
              </div>
              <div className="w-full mt-6 flex items-center">
                <div className="w-1/3">value</div>
                <div className="w-2/3">
                  <Input
                    type="text"
                    value={value}
                    onChange={(e) => {
                      onOptionChange(e, "value", index);
                      formik.setFieldValue("property_options", value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => onRemoveOption(index)}
                className="rounded-full ml-5 flex w-6 h-6 items-center justify-center cursor-pointer bg-gray-200">
                X
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      <div
        className="
          p-2
          flex
          w-full
          border
          rounded-lg
          items-center
          cursor-pointer
          justify-center
          text-primary
          border-primary
        "
        onClick={onAddOption}>
        Add option
      </div>
    </div>
  );
}

export default PropertySelectContent;

PropertySelectContent.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  formik: PropTypes.object,
};
