export default function TextArea({
  className,
  style,
  error,
  size = 3,
  disabled,
  onChange,
  value,
  ...rest
}) {
  return (
    <div
      className={`
            border
            bg-white
            flex
            space-x-2
            items-center
            rounded-lg
            text-body
            relative
            px-2
            p-1
            w-full
            font-smaller
            focus-within:ring
            focus-within:outline-none
            transition
            focus-within:border-blue-300
            ${error ? "border-red-600" : "border-gray-200"}
            ${className}
        `}
      style={style}>
      {disabled ? (
        <div
          className="absolute inset-0 rounded-md"
          style={{ backgroundColor: "rgba(221, 226, 228, 0.5)", margin: 0 }}
        />
      ) : (
        <></>
      )}
      <textarea
        value={value}
        onChange={onChange}
        className="w-full outline-none"
        style={
          disabled
            ? {
                backgroundColor: "#F1F1F1",
                height: size * 24,
                margin: 0,
                position: "relative",
                zIndex: "1",
              }
            : { height: size * 24 }
        }
        type="text"
        readOnly={disabled}
        {...rest}
      />
    </div>
  );
}
