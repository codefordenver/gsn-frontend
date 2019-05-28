import React, { useEffect, useState } from 'react';
import { getDistricts } from 'services/districtServices';
import PropTypes from 'prop-types';

import { withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateDistrictTable } from 'components/sharedStyles/Table/CreateTablesStyle';


function Districts(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDistricts().then((s) => {
      setDistricts(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Districts'));
  }


  return (
    < CreateDistrictTable header = {header} title = 'All District' 
    tHead = {tHead} data = {districts} tRow = {tRow} 
    striped = {striped} />
  );
}


Districts.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Districts);
