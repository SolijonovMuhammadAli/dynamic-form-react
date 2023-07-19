import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { createObjectID } from "mongo-object-reader";

import PropertyGroupHeader from "./components/PropertyGroupHeader";
import PropertyGroupInformations from "./components/PropertyGroupInformations";

import { initialValues } from "../data/constants";
import { validationSchema } from "../validations";
import ProppertyGroupSetting from "./components/ProppertyGroupSetting";
import { propertiesGroupRest } from "../services/propertiesGroupRest";
import { getPropertiesGroupId } from "../services/getPropertiesGroupId";
import PropertyGroupView from "./components/PropertyGroupView";

const { post, put } = propertiesGroupRest;

function PropertiesCreate() {
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = (values) => {
    const data = { id: createObjectID(), ...values };
    console.log(data);
    params?.id
      ? put(params.id, data).then(() => navigate("/admin/properties-groups"))
      : post(data).then(() => navigate("/admin/properties-groups"));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  useEffect(() => {
    if (params?.id) getPropertiesGroupId(params.id, formik);
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <PropertyGroupHeader />
      <div className="flex">
        <div className="w-1/2">
          <PropertyGroupInformations formik={formik} />
        </div>
        <div className="w-1/2">
          <ProppertyGroupSetting formik={formik} />
        </div>
      </div>
      <PropertyGroupView formik={formik} />
    </form>
  );
}

export default PropertiesCreate;
