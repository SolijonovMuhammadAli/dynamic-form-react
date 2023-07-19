import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropertiesGroupTable from "features/properties-group/properties-group-table";
import { Button } from "@mui/material";

function PropertiesGroups() {
  return (
    <Fragment>
      <div className="p-4 bg-white flex justify-end">
        <Link to="/admin/properties-groups/create">
          <Button className="bg-blue-600 text-white font-bold text-sm">
            Create
          </Button>
        </Link>
      </div>
      <PropertiesGroupTable />
    </Fragment>
  );
}

export default PropertiesGroups;
