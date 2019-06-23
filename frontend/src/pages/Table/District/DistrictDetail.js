import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictDetail } from 'services/districtServices';
import { DetailItem } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import mapStateToProps from 'components/sharedStyles/Table/StateToProps';
import { fetchDistrictDetails } from '../../../state/DistrictActions';

function FullDistrictDetail(props) {
  const {
    classes: { header, striped, tHead, tRow, tableTitle },
  } = props;
  const params = props.match;
  const { districtId } = params;
  const my_or_all = props.my_or_all;
  const my_or_all_url = "/" + my_or_all;
  const dispatch = useDispatch();

  const districtDetail = useSelector(state => {
    return state.districts.district;
  });

  console.log(districtDetail);

  useEffect(() => {
    dispatch(fetchDistrictDetails({ accessLevel: my_or_all, districtId }));
  }, [dispatch, districtId]);

  if (!districtDetail) {
    return loadingJSX('District Detail');
  }

  const { districtName, state, city, code, schoolSet } = districtDetail;

  const schoolTable = (
    < CreateSchoolTable 
            header = {header}
            tHead = {tHead} 
            data = {schoolSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all_url}/>
  );

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        {districtName}
      </Typography>
      <DetailItem k="Code" val={code} />
      <DetailItem k="City" val={city} />
      <DetailItem k="State" val={state} />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="School"
        table={schoolTable}
      />
    </div>
  );
}

FullDistrictDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

const DistrictDetail = withStyles(TablePageStyles)(FullDistrictDetail);
export default connect(mapStateToProps)(DistrictDetail);
