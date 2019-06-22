import React, { useEffect, useState } from 'react';
import { getDistricts } from 'services/districtServices';
import PropTypes from 'prop-types';

import { withStyles, Typography
} from '@material-ui/core';


import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateDistrictTable } from 'components/sharedStyles/Table/CreateTablesStyle';



function Districts(props) {
  const my_or_all = props.my_or_all;
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
    <div>
      <Typography
        variant="h4"
        component="h1"
        className={header}>
        All Districts
        </Typography>
      < CreateDistrictTable 
        header = {header}
        tHead = {tHead} 
        data = {districts} 
        tRow = {tRow} 
        striped = {striped} 
        my_or_all_link = {my_or_all}/>
    </div>
  );
}


Districts.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Districts);
