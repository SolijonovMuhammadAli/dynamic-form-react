import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "../FSelect/Select";
import fetch from "lib/fetch";

const handleFormatOptions = (list) => {
  return list && list.length
    ? list.map((elm) => ({ label: elm.name, value: elm }))
    : [];
};

export default function AutoComplate({
  url = "/",
  params = {},
  onFetched = (res) => res.data,
  formatOptions = handleFormatOptions,
  onChange,
  value,
  children,
  searchName = "",
  isMulti,
  disabled = false,
  ...props
}) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOptions = (params) => {
    setLoading(true);
    fetch
      .getApi(url, params)
      .then((res) => {
        setOptions(formatOptions(onFetched(res)));
      })
      .finally(() => setLoading(false));
  };

  const onInputChange = (input) => {
    const seach = `_${searchName}`;
    getOptions({ ...params, [seach]: input });
  };

  useEffect(() => {
    if (!disabled) {
      getOptions();
    }
  }, []);

  return (
    <Select
      isSearchable
      options={options}
      value={value}
      isMulti={isMulti}
      onChange={onChange}
      onInputChange={onInputChange}
      filterOption={() => true}
      isLoading={isMulti ? false : loading}
      disabled={disabled}
      {...props}>
      {children}
    </Select>
  );
}

AutoComplate.propTypes = {
  url: PropTypes.string,
  params: PropTypes.string,
  onFetched: PropTypes.func,
  formatOptions: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.array,
  children: PropTypes.node,
  searchName: PropTypes.string,
  isMulti: PropTypes.bool,
  disabled: PropTypes.bool,
};
