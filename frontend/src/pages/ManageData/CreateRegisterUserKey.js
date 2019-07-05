import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, withStyles, Button } from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import { createRegistrationKey } from "services/authServices";
import { fetchCurrentRegistrationKeys } from "../../state/UserActions";
import { CreateRegistrationKeyTable } from "components/sharedStyles/Table/CreateTablesStyle";
import CreateTableHeader from "components/sharedStyles/Table/TableHeader";

function CreateRegisterUserKey(props) {
  const {
    classes: { header, tHead, tRow, striped, tableTitle }
  } = props;

  const dispatch = useDispatch();
  const keys = useSelector(state => state.user.registrationKey);

  useEffect(() => {
    dispatch(fetchCurrentRegistrationKeys());
  }, [dispatch]);

  const RegistrationKeyTable = (
    <CreateRegistrationKeyTable
      header={header}
      tHead={tHead}
      data={keys}
      tRow={tRow}
      striped={striped}
    />
  );

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Registration Key for New User
      </Typography>
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Active Registration Keys"
        table={RegistrationKeyTable}
      />

      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={createRegistrationKey}
      >
        Create New Key
      </Button>
    </>
  );
}

export default withStyles(TablePageStyles)(CreateRegisterUserKey);
