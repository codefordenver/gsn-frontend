import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Layout from './layouts/SignUpLayout';
import styles from './sharedStyles/LoginStyles';

function LandingPage(props) {
  const {
    classes: { divider, header, link, text }
  } = props;

  return (
    <Layout>
      <Typography className={header} variant="h1" gutterBottom>
        GSN
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
