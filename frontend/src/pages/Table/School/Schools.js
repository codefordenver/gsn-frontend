import React, { useEffect, useState } from 'react';
import { getSchools } from 'services/schoolServices';
import PropTypes from 'prop-types';

import { withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';



function Schools(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchools().then((s) => {
      setSchools(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Schools'));
  }


  return (
    <div>
      <CreateTableHeader
          headerClassStyle = {header}
          title = "All Schools" />
      < CreateSchoolTable 
        header = {header} 
        tHead = {tHead} 
        data = {schools} 
        tRow = {tRow} 
        striped = {striped} />
    </div>
  );
}


Schools.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Schools);
