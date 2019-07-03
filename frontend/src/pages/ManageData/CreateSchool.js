import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, withStyles, Select, MenuItem } from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import SchoolEntryComponent from "components/sharedStyles/ManageData/School";
import { postSchools } from "../../state/SchoolActions";

function CreateSchool(props) {
  const {
    classes: { header }
  } = props;

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Create School
      </Typography>

      <SchoolEntryComponent action={postSchools} />
    </>
  );
}

export default withStyles(TablePageStyles)(CreateSchool);
