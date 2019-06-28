import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Layout from './layouts/SignUpLayout';
import styles from './sharedStyles/LoginStyles';
import GsnLogo from '../images/gsn_logo_white.png';

function LandingPage(props) {
  const {
    classes: { divider, header, link, text }
  } = props;

  return (
    <Layout>
      <Typography className={header} variant="h1" gutterBottom>
        <img
          className="landing-image"
          src={GsnLogo}
          alt="gsn-logo"
          height="auto"
          width="210"
        />
      </Typography>

      <Divider className={divider} />

      <Typography className={text}>
        <Link to="/login" className={link}>
          Login
        </Link>
        <br />
        <Link to="/register" className={link}>
          Register
        </Link>
      </Typography>
    </Layout>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(LandingPage);
