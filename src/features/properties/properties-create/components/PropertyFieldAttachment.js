import React, { useEffect } from "react";
import { getSelectProperteis } from "../../services/getSelectProperteis";

function PropertyFieldAttachment() {
  useEffect(() => {
    getSelectProperteis();
  }, []);
  return <div>PropertyFieldAttachment</div>;
}

export default PropertyFieldAttachment;
