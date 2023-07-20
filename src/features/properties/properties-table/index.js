import React, { useEffect, useState } from "react";
import CardContent from "components/CardContent";
import PropertiesTable from "./components/PropertiesTable";
import { PropertyRest } from "../services/propertyRest";

const { getProperties } = PropertyRest;

function PropertyTable() {
  const [properties, setProperties] = useState([]);

  const getPropertiesData = () => {
    getProperties().then((res) => setProperties(res.data));
  };

  useEffect(() => {
    getPropertiesData();
  }, []);
  return (
    <CardContent title="Maydonlar jadvali">
      <PropertiesTable data={properties} />
    </CardContent>
  );
}

export default PropertyTable;
