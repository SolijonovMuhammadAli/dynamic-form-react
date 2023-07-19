import _ from "lodash";

const ErrorText = ({ formik, name }) => {
  return (
    <div className="min-h-6 w-full text-red-500 font-md">
      {(_.get(formik?.errors, name) && _.get(formik?.errors, name)) ?? " "}
    </div>
  );
};

export default ErrorText;
