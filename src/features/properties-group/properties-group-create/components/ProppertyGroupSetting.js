import PropTypes from "prop-types";
import React, { useState } from "react";
import FRow from "components/form/FRow";
import FAutoUp from "components/form/FAutoUp/AutoUp";
import CardContent from "components/CardContent";

function ProppertyGroupSetting({ formik }) {
  const { feilds } = formik.values;
  console.log(feilds);

  const [region, setRegion] = useState(null);
  const [district, setDistrict] = useState(null);

  return (
    <CardContent title="Qo'shimcha sozlamalar">
      <div className="flex flex-col gap-1">
        <FRow label="Viloyat" block>
          <FAutoUp
            url="/places"
            placeholder="Viloyatlar"
            params={{ type: 1, parent: "p" }}
            value={region}
            onChange={(e) => setRegion(e)}
          />
        </FRow>
        <FRow label="Tuman" block>
          <FAutoUp
            url="/places"
            placeholder="Tumanlar"
            value={district}
            onChange={setDistrict}
            params={{ parent: region?.value, type: 2 }}
          />
        </FRow>
      </div>
    </CardContent>
  );
}

export default ProppertyGroupSetting;
ProppertyGroupSetting.propTypes = {
  formik: PropTypes.object,
};
