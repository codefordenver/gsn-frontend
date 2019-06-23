import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateDistrictTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import mapStateToProps from 'components/sharedStyles/Table/StateToProps';
import { fetchDistricts } from '../../../state/DistrictActions';


function FullDistricts(props) {
  const my_or_all = props.my_or_all;
  const my_or_all_url = "/" + my_or_all;
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const dispatch = useDispatch();

  const districts = useSelector(state => state.districts.districts);
  useEffect(() => {
    dispatch(fetchDistricts({ accessLevel: my_or_all }));
  }, [dispatch]);

  if (!districts) {
    return loadingJSX('Districts');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        { my_or_all + " Districts" }
        </Typography>
      < CreateDistrictTable 
        header = {header}
        tHead = {tHead} 
        data = {districts} 
        tRow = {tRow} 
        striped = {striped} 
        my_or_all_link = {my_or_all_url}/>
    </div>
  );
}

FullDistricts.propTypes = {
  classes: PropTypes.object
};

const Districts = withStyles(TablePageStyles)(FullDistricts);
export default connect(mapStateToProps)(Districts);

