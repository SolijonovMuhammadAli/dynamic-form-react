const RequiredStar = ({ isVisible = true }) =>
  isVisible ? <span className="text-red-500 p-1">*</span> : null;

export default RequiredStar;
