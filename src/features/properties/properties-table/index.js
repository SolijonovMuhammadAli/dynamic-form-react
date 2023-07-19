import CardContent from "components/CardContent";
import React, { useEffect, useState } from "react";
import PropertiesTable from "./components/PropertiesTable";
import { PropertyRest } from "../services/propertyRest";

const { get } = PropertyRest;

function PropertyTable() {
  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    get().then((res) => {
      console.log(res.data);
      setProperties(res.data);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <CardContent title="Maydonlar jadvali">
      <PropertiesTable data={properties} />
    </CardContent>
  );
}

export default PropertyTable;
