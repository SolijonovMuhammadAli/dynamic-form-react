import RequiredStar from "./RequiredStar";

const FRow = ({ required, label, children }) => {
  return (
    <div className={`w-full flex flex-wrap items-start py-4`}>
      <div className="md:w-1/3 w-full">
        {required && <RequiredStar />}
        <span>{label}</span>
      </div>
      <div className="md:w-2/3 w-full">{children}</div>
    </div>
  );
};

export default FRow;
