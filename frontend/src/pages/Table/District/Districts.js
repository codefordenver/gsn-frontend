import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDistricts } from 'services/districtServices';
import PropTypes from 'prop-types';

import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';

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
      <div>
          <Typography
            variant="h4"
            component="h1"
            className={header}
          >All Districts
          </Typography>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell className={tHead}>District</TableCell>
                      <TableCell className={tHead}>State</TableCell>
                      <TableCell className={tHead}>City</TableCell>
                      <TableCell className={tHead}>Code</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {districts.map((district, i) => {
                    const {
                      districtName,
                      districtId,
                      state,
                      city,
                      code,
                    } = district;
                    return (
                        <TableRow
                          key={districtId}
                          className={`${tRow} ${i % 2 !== 0 ? striped : ''}`}
                        >
                            <TableCell align="left">
                                <Link to={`/district/${districtId}`}>
                                    <StyledLink>{districtName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell align="left">{state}</TableCell>
                            <TableCell align="left">{city}</TableCell>
                            <TableCell align="left">{code}</TableCell>

                        </TableRow>
                    );
                  })}
              </TableBody>
          </Table>
      </div>
  );
}



Districts.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Districts);
