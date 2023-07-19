function Input({ disabled, type = "text", value, onChange, ...rest }) {
  return (
    <div className="">
      <input
        className="focus:outline-none w-full border-gray-200  border-2 rounded-md px-2 py-1"
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;
