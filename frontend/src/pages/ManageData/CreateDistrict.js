import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, withStyles, Select, MenuItem } from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import DistrictEntryComponent from "components/sharedStyles/ManageData/District";
import { postDistricts } from "../../state/DistrictActions";

function CreateDistrict(props) {
  const {
    classes: { header }
  } = props;

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Create District
      </Typography>

      <DistrictEntryComponent action={postDistricts} />
    </>
  );
}

export default withStyles(TablePageStyles)(CreateDistrict);
