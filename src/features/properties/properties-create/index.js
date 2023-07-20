import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { createObjectID } from "mongo-object-reader";

import PropertyHeader from "./components/PropertyHeader";
import PropertyPreview from "./components/PropertyPreview";
import PropertyUsedFieldGroups from "./components/PropertyUsedFieldGroups";
import PropertyInformations from "./components/PropertyInformations";

import { initialValues } from "../data/constants";
import { validationSchema } from "../validations";
import { PropertyRest } from "../services/propertyRest";
import { getPropertyId } from "../services/getPorpertyId";
import PropertySelectValues from "./components/PropertySelectValues";

const { postProperty, putProperty } = PropertyRest;

function PropertiesCreate() {
  const navigate = useNavigate();
  const params = useParams();

  const handleNavigate = () => navigate("/admin/properties");

  const onSubmit = (values) => {
    const data = { id: createObjectID(), ...values };
    params?.id
      ? putProperty(params.id, data).then(handleNavigate)
      : postProperty(data).then(handleNavigate);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  useEffect(() => {
    if (params?.id) {
      getPropertyId(params.id, formik);
    }
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <PropertyHeader formik={formik} />
      <div className="flex">
        <div className="w-1/2">
          <PropertyInformations formik={formik} />
          <PropertyUsedFieldGroups />
        </div>
        <div className="w-1/2">
          <PropertyPreview formik={formik} />
          <PropertySelectValues formik={formik} />
        </div>
      </div>
    </form>
  );
}

export default PropertiesCreate;
