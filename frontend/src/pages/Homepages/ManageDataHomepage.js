import React, { useEffect, useState } from "react";
import { Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import CreateTableHeader from "components/sharedStyles/Table/TableHeader";
import { Link } from "react-router-dom";

function ManageDataHomepage(props) {
  const [loading, setLoading] = useState(true);
  const {
    classes: { header },
    match: { params }
  } = props;
  const {
    classes: { tableTitle }
  } = props;

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return loadingJSX("Manage Data Homepage");
  }

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        View All Data
      </Typography>

      <Link to="/manage-data/upload" style={{ textDecoration: "none" }}>
        <CreateTableHeader headerClassStyle={tableTitle} title="Data Upload" />
      </Link>
      <Link to="/manage-data/create-district" style={{ textDecoration: "none" }}>
        <CreateTableHeader
          headerClassStyle={tableTitle}
          title="Create/Edit/Delete District"
        />
      </Link>
      <Link to="/manage-data/create-school" style={{ textDecoration: "none" }}>
        <CreateTableHeader
          headerClassStyle={tableTitle}
          title="Create/Edit/Delete School"
        />
      </Link>
    </div>
  );
}

ManageDataHomepage.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(TablePageStyles)(ManageDataHomepage);
