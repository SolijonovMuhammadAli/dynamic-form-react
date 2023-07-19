import CardContent from "components/CardContent";
import React, { useEffect, useState } from "react";
import PropertiesGroupTable from "./components/PropertiesGroupTable";
import { propertiesGroupRest } from "../services/propertiesGroupRest";

const { get } = propertiesGroupRest;

function PropertyGroupTable() {
  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    get().then((res) => {
      setProperties(res.data);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <CardContent title="Maydonlar jadvali">
      <PropertiesGroupTable data={properties} />
    </CardContent>
  );
}

export default PropertyGroupTable;
