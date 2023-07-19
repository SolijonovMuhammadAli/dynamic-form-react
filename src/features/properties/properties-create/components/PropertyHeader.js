import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deletePropertyId } from "features/properties/services/deletePropertyId";

function PropertyHeader({ formik }) {
  const navigate = useNavigate();

  const handleBackPage = () => navigate(-1);
  const handleDelete = () => deletePropertyId(formik, handleBackPage);

  return (
    <div className="p-4 bg-white flex justify-between w-full">
      <div className="">Maydon</div>
      <div className="flex gap-4 justify-end">
        <Button
          className="bg-green-600 text-white font-bold text-sm"
          type="button"
          onClick={handleBackPage}>
          Back
        </Button>
        <Button
          className="bg-blue-600 text-white font-bold text-sm"
          type="submit">
          Save
        </Button>
        <Button
          onClick={handleDelete}
          className="bg-red-600 text-white font-bold text-sm">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default PropertyHeader;

PropertyHeader.propTypes = {
  formik: PropTypes.object,
};
