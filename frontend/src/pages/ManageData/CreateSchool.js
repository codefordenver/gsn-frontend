import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, withStyles, Select, MenuItem } from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import SchoolEntryComponent, { SchoolDeleteComponent } from "components/sharedStyles/ManageData/School";
import { postSchools, deleteSchools } from "../../state/SchoolActions";

function CreateSchool(props) {
  const {
    classes: { header }
  } = props;

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Create/Edit/Delete School
      </Typography>
      <Typography className={header} component="h1" variant="h6">
        Create School
      </Typography>
      <SchoolEntryComponent action={postSchools} />
      <br />
      <Typography className={header} component="h1" variant="h6">
        Delete School
      </Typography>
      <SchoolDeleteComponent action={deleteSchools} />

    </>
  );
}

export default withStyles(TablePageStyles)(CreateSchool);
