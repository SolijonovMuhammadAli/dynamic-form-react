import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "../FSelect/Select";
import fetch from "lib/fetch";

function AutoUp({
  url = "/",
  params = {},
  onFetched = (res) => res.data,
  formatOptions = handleFormatOptions,
  onChange,
  value,
  children,
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
      .then((res) => setOptions(formatOptions(onFetched(res))))
      .finally(() => setLoading(false));
  };

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
      filterOption={() => true}
      isLoading={isMulti ? false : loading}
      disabled={disabled}
      {...props}>
      {children}
    </Select>
  );
}

export default memo(AutoUp);

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

const handleFormatOptions = (list) => {
  return list && list.length
    ? list.map((elm) => ({ ...elm, label: elm.name }))
    : [];
};
