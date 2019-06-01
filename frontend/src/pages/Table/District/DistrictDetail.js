import React, { useEffect, useState } from 'react';
import {
   Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictDetail } from 'services/districtServices';
import {  DetailItem} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';



function DistrictDetail(props) {
  const [districtDetail, setDistrictDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const {
    classes: {
       striped, tHead, tRow,
    },
  } = props;
  const districtIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in DistrictDetail', districtIdParam);
    getDistrictDetail(districtIdParam).then((s) => {
      setDistrictDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('District Detail'));
  }

  const {
    districtName,
    state,
    city,
    code,
    schoolSet
  } = districtDetail;

  const schoolTable = (
    < CreateSchoolTable 
            header = {header}
            tHead = {tHead} 
            data = {schoolSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{districtName}</Typography>
          <DetailItem k="Code" val={code} />
          <DetailItem k="City" val={city} />
          <DetailItem k="State" val={state} />
          
          <CreateTableHeader
            headerClassStyle = {header}
            title = "School" 
            table = {schoolTable}/>
      </div>
  );
}




DistrictDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(DistrictDetail);
