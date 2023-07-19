import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropertiesTable from "features/properties/properties-table";
import { Button } from "@mui/material";

function Properties() {
  return (
    <Fragment>
      <div className="p-4 bg-white flex justify-end">
        <Link to="/admin/property/create">
          <Button className="bg-blue-600 text-white font-bold text-sm">
            Create
          </Button>
        </Link>
      </div>
      <PropertiesTable />
    </Fragment>
  );
}

export default Properties;
