import Switch from "./Switch";
import _ from "lodash";

const FSwitch = ({ formik, addValid, delValid, name, roleId, ...props }) => {
  return (
    <div>
      <Switch
        name={name}
        checked={_.get(formik?.values, name)}
        onChange={(val) => formik?.setFieldValue(name, val)}
        isclearable={"true"}
        {...props}
        disabled={props.disabled}
      />
      <div className="min-h-6" />
    </div>
  );
};

export default FSwitch;
