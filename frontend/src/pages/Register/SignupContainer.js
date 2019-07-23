import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/layouts/SignUpLayout';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from 'state/UserActions';
import {
  Typography, Divider, withStyles,
} from '@material-ui/core';
import AuthForm from '../AuthForm';
import styles from '../../components/sharedStyles/LoginStyles';
import GsnLogo from '../../images/gsn_logo_white.png';

function SignupForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [buttonLabel, changeButtonLabel] = useState('Register');

  const {
    classes: {
      divider, header, input, link, text,
    },
    loading,
    error,
    register,
  } = props;

  const completeSignup = () => {
    setSubmitted(true);
    if (username && password) register({ username, password });
  };

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
          <Typography
            className={header}
            variant="h1"
            gutterBottom
          >
          Register
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
            register={register}
            completeSignup={completeSignup}
            error={error}
            buttonLabel={buttonLabel}
          />

          {loading && <Typography>Loading...</Typography>}

          <Divider className={divider} />

          <Typography className={text}>
          Already Have an account? &nbsp;
              <Link to="/login" onClick={() => changeButtonLabel('Log In')} className={link}>
            Log In
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
SignupForm.propTypes = {
  loading: PropTypes.bool,
  register: PropTypes.func,
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
  { register: userActions.register },
)(
  withStyles(styles)(SignupForm),
);
