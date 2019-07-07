import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "state/StudentActions";
import PropTypes from "prop-types";
import { Typography, withStyles, Button } from "@material-ui/core";

import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import {
  MyStudentsToAdd,
  MyStudentsToRemove
} from "../../components/sharedStyles/ManageData/MyStudentsMultiCheckbox";

function MyStudents(props) {
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        Add/Remove Students from My Students List
      </Typography>

      <Typography variant="h6" component="h1" className={header}>
        Add Students To My List
      </Typography>
      <MyStudentsToAdd />
      <br />

      <br />
      <br />
      <Typography variant="h6" component="h1" className={header}>
        Remove Students From My List
      </Typography>
      <MyStudentsToRemove />
    </div>
  );
}

MyStudents.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(MyStudents);
