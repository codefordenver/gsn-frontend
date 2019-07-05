import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, withStyles, Select, MenuItem } from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import DistrictEntryComponent, {
  DistrictDeleteComponent
} from "components/sharedStyles/ManageData/District";
import { postDistricts, deleteDistricts } from "../../state/DistrictActions";

function CreateDistrict(props) {
  const {
    classes: { header }
  } = props;

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Create/Edit/Delete District
      </Typography>
      <Typography className={header} component="h1" variant="h6">
        Create District
      </Typography>
      <DistrictEntryComponent action={postDistricts} />
      <br />
      <Typography className={header} component="h1" variant="h6">
        Delete District
      </Typography>
      <DistrictDeleteComponent action={deleteDistricts} />
    </>
  );
}

export default withStyles(TablePageStyles)(CreateDistrict);
