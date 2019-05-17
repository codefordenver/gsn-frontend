import React from 'react';
import PropTypes from 'prop-types';
import { InputBase, Button } from '@material-ui/core';

const AuthForm = (props) => {
  const {
    classes: input,
    error,
    loading,
    // logIn,
    setUsername,
    username,
    password,
    setPassword,
    submitted,
    completeLogin,
    completeSignup,
    buttonLabel,
  } = props;

  const handleSubmit = () => {
    if (window.location.includes('login')) {
      completeLogin();
    } else {
      completeSignup();
    }
  };

  return (
      <form onSubmit={handleSubmit}>
          {/* TODO Add Error Field */}
          {error && (
          <p>
    Error:
              {error}
          </p>
          )}

          <InputBase
            className={input}
            onChange={e => setUsername(e.target.value)}
            type="text"
            error={submitted && !username}
            name="username"
            placeholder="User Name"
            value={username}
            disabled={loading}
            // onKeyPress={e => (e.key === 'Enter' ? completeLogin() : () => {})}
            fullWidth
          />

          <InputBase
            className={input}
            onChange={e => setPassword(e.target.value)}
            type="password"
            error={submitted && !password}
            name="password"
            placeholder="Password"
            value={password}
            disabled={loading}
            // onKeyPress={e => (e.key === 'Enter' ? completeLogin() : () => {})}
            fullWidth
          />

          <Button
            type="submit"
            disabled={loading}
            variant="contained"
            color="secondary"
            fullWidth
          >
              {buttonLabel}
          </Button>
      </form>
  );
};

AuthForm.propTypes = {
  loading: PropTypes.bool,
  setUsername: PropTypes.func,
  username: PropTypes.func,
  password: PropTypes.func,
  setPassword: PropTypes.func,
  submitted: PropTypes.func,
  completeLogin: PropTypes.func,
  completeSignup: PropTypes.func,
  buttonLabel: PropTypes.func,
  error: PropTypes.objectOf(PropTypes.string),
  classes: PropTypes.shape({
    input: PropTypes.string,
  }),
};

export default AuthForm;
