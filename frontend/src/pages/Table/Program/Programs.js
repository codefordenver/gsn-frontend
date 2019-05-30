import React, { useEffect, useState } from 'react';
import { getPrograms } from 'services/programServices';
import PropTypes from 'prop-types';

import { withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateProgramTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';



function Programs(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrograms().then((s) => {
      setPrograms(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Programs'));
  }


  return (
    <div>
      <CreateTableHeader
        headerClassStyle = {header}
        title = "All Programs" />
    < CreateProgramTable 
      header = {header} 
      tHead = {tHead} 
      data = {programs} 
      tRow = {tRow} 
      striped = {striped} />
    </div>
  );
}


Programs.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Programs);
