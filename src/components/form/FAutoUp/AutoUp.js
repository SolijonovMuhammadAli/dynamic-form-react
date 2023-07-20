import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "../FSelect/Select";
import fetch from "lib/fetch";

const handleFormatOptions = (list) => {
  return list && list.length
    ? list.map((elm) => ({ ...elm, label: elm.name }))
    : [];
};

export default function AutoUp({
  url = "/",
  params = {},
  onFetched = (res) => res.data,
  formatOptions = handleFormatOptions,
  onChange,
  value,
  children,
  // searchName = "",
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

  // const onInputChange = (input) => {
  //   getOptions({ ...params, [searchName]: input });
  // };

  useEffect(() => {
    if (params.parent) {
      getOptions(params);
    }
  }, [params]);

  return (
    <Select
      isSearchable
      options={options}
      value={value}
      isMulti={isMulti}
      onChange={onChange}
      // onInputChange={onInputChange}
      filterOption={() => true}
      isLoading={isMulti ? false : loading}
      disabled={disabled}
      {...props}>
      {children}
    </Select>
  );
}

AutoUp.propTypes = {
  url: PropTypes.string,
  params: PropTypes.object,
  onFetched: PropTypes.func,
  formatOptions: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any,
  children: PropTypes.node,
  searchName: PropTypes.string,
  isMulti: PropTypes.bool,
  disabled: PropTypes.bool,
};
