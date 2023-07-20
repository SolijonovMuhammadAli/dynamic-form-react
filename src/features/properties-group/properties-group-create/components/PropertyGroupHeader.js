import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PropertyGroupHeader() {
  const navigate = useNavigate();
  const handleBackPage = () => navigate(-1);
  return (
    <Fragment>
      <div className="p-4 bg-white flex justify-between w-full">
        <div className="">Maydon guruhi</div>
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
          <Button className="bg-red-600 text-white font-bold text-sm">
            Delete
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default PropertyGroupHeader;
