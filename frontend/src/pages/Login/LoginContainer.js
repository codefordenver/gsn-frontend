import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from 'state/UserActions';
import {
  Button, Typography, Divider, withStyles,
} from '@material-ui/core';
import AuthForm from '../AuthForm';
import Layout from '../../components/layouts/SignUpLayout';
import styles from '../../components/sharedStyles/LoginStyles';

function LoginContainer(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [buttonLabel, changeButtonLabel] = useState('Log In');

  const {
    classes: {
      divider, header, input, link, text,
    },
    loading,
    logIn,
    error,
  } = props;

  const completeLogin = () => {
    setSubmitted(true);
    if (username && password) logIn({ username, password });
  };

  return (
      <Layout>
          <Typography
            className={header}
            variant="h1"
            gutterBottom
          >
          Log In
          </Typography>

          <AuthForm
            input={input}
            header={header}
            setUsername={setUsername}
            username={username}
            password={password}
            setPassword={setPassword}
            loading={loading}
            submitted={submitted}
            logIn={logIn}
            completeLogin={completeLogin}
            error={error}
            buttonLabel={buttonLabel}
          />

          {loading && <Typography>Loading...</Typography>}

          <Divider className={divider} />

          <Typography className={text}>
          No account?&nbsp;
              <Link to="/register" onClick={() => changeButtonLabel('Register')} className={link}>
            Register
              </Link>
          </Typography>
      </Layout>
  );
}
const mapStateToProps = ({ user }) => ({
  loading: user.get('loading'),
  error: user.get('error'),
});

/* eslint-disable no-unexpected-multiline */
LoginContainer.propTypes = {
  loading: PropTypes.bool,
  logIn: PropTypes.func,
  error: PropTypes.objectOf(PropTypes.string),
  classes: PropTypes.shape({
    divider: PropTypes.string,
    header: PropTypes.string,
    input: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default connect(
  mapStateToProps,
  { logIn: userActions.logIn },
)(
  withStyles(styles)(LoginContainer),
);
