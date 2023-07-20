import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { createObjectID } from "mongo-object-reader";

import PropertyGroupHeader from "./components/PropertyGroupHeader";
import PropertyGroupInformations from "./components/PropertyGroupInformations";
import ProppertyGroupSetting from "./components/ProppertyGroupSetting";
import PropertyGroupView from "./components/PropertyGroupView";

import { propertiesGroupRest } from "../services/propertiesGroupRest";
import { getPropertiesGroupId } from "../services/getPropertiesGroupId";

import { initialValues } from "../data/constants";
import { validationSchema } from "../validations";

const { postPropertyGroup, putPropertyGroup } = propertiesGroupRest;

function PropertiesCreate() {
  const navigate = useNavigate();
  const params = useParams();

  const handleNavigate = () => navigate("/admin/properties-groups");

  const onSubmit = (values) => {
    const data = { id: createObjectID(), ...values };

    params?.id
      ? putPropertyGroup(params.id, data).then(handleNavigate)
      : postPropertyGroup(data).then(handleNavigate);
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
