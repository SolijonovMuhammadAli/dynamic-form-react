import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Input from "components/form/FInput/Input";
import FRow from "components/form/FRow";

const defalutValue = { label: "", value: "" };

function PropertySelectContent({
  options,
  onChange = () => {},
  formik,
  optionName,
}) {
  const { setFieldValue } = formik;

  const onAddOption = () => {
    if (options) {
      onChange((old) => [...old, defalutValue]);
      setFieldValue(optionName, [...options, defalutValue]);
    } else onChange([defalutValue]);
  };

  const onRemoveOption = (index = 0) => {
    if (options.length !== 1) {
      onChange((old) => old.filter((el, i) => i !== index));
      setFieldValue(
        optionName,
        options.filter((el, i) => i !== index)
      );
    }
  };

  const onOptionChange = (e, key, index) => {
    onChange((prevOptions) =>
      prevOptions.map((option, i) =>
        index === i ? { ...option, [key]: e.target.value } : option
      )
    );
    setFieldValue(
      optionName,
      options.map((option, i) =>
        index === i ? { ...option, [key]: e.target.value } : option
      )
    );
  };

  useEffect(() => {
    const OldOptions = formik.values[optionName];
    onChange(OldOptions);
  }, []);

  return (
    <div>
      {options?.length > 0 ? (
        options.map(({ label, value }, index) => (
          <div className="flex mb-6" key={index}>
            <div className="rounded-lg border border-gray-200 p-5 flex-grow">
              <FRow label="label">
                <Input
                  type="text"
                  value={label}
                  onChange={(e) => onOptionChange(e, "label", index)}
                />
              </FRow>
              <FRow label="value">
                <Input
                  type="text"
                  value={value}
                  onChange={(e) => onOptionChange(e, "value", index)}
                />
              </FRow>
            </div>
            <div
              onClick={() => onRemoveOption(index)}
              className="rounded-full ml-5 flex w-6 h-6 items-center justify-center cursor-pointer bg-gray-200">
              X
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
  options: PropTypes.array,
  onChange: PropTypes.func,
  formik: PropTypes.object,
  optionName: PropTypes.string,
  optionsSelect: PropTypes.array,
};
