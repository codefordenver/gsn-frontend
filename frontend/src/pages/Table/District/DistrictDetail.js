import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { DetailItem } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import { fetchDistrictDetails } from '../../../state/DistrictActions';

function DistrictDetail(props) {
  const {
    classes: { header, striped, tHead, tRow, tableTitle }
  } = props;

  const { districtId } = props.match.params;

  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  const dispatch = useDispatch();

  const districtDetail = useSelector(state => {
    return state.districts.district;
  });

  useEffect(() => {
    dispatch(fetchDistrictDetails({ accessLevel: myOrAll, districtId }));
  }, [dispatch, districtId, myOrAll]);

  if (!districtDetail) {
    return loadingJSX('District Detail');
  }

  const { districtName, state, city, code, schoolSet } = districtDetail;

  const schoolTable = (
    <CreateSchoolTable
      header={header}
      tHead={tHead}
      data={schoolSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={myOrAllUrl}
    />
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

DistrictDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(TablePageStyles)(DistrictDetail);
