import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const DetailBase = ({ k, val, classes: { lDiv, rDiv, root } }) => (
  <Typography color="primary" className={root}>
      <div className={lDiv}>{k}:</div>
      <div className={rDiv}>{val}</div>
  </Typography>
);

DetailBase.propTypes = {
k: PropTypes.string,
val: PropTypes.string,
classes: PropTypes.object,
};

const DLinkBase = ({
  k, val, link, classes: { lDiv, rDiv, root },
}) => (
    <Typography color="primary" className={root}>
        <div className={lDiv}>{k}:</div>
        <div className={rDiv}><Link to={link}><StyledLink>{val}</StyledLink></Link></div>
    </Typography>
);

DLinkBase.propTypes = {
  k: PropTypes.string,
  val: PropTypes.string,
  link: PropTypes.string,
  classes: PropTypes.object,
};

const dStyles = theme => ({
  lDiv: {
    fontWeight: 800,
    minWidth: 120,
    marginRight: theme.spacing.unit * 4,
    textAlign: 'right',
  },
  rDiv: {
    textAlign: 'left',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.unit * 1,
  },
});

const DetailItem = withStyles(dStyles, { withTheme: true })(DetailBase);
const DetailLink = withStyles(dStyles)(DLinkBase);

export { DetailLink, DetailItem };