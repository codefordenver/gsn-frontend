import React from "react";
import PropTypes from "prop-types";
import { InputBase, Button } from "@material-ui/core";

function AuthForm(props) {
  const {
    classes: input,
    error,
    loading,
    // logIn,
    setUsername,
    username,
    password,
    specialKey,
    setPassword,
    setSpecialKey,
    submitted,
    completeLogin,
    completeSignup,
    buttonLabel
  } = props;

  const handleSubmit = () => {
    window.location.href.includes("login") ? completeLogin() : completeSignup();
  };

  function KeyInput() {
    return (
      <InputBase
        className={input}
        onChange={e => setSpecialKey(e.target.value)}
        type="specialKey"
        error={submitted && (!password || !specialKey)}
        name="specialKey"
        placeholder="Registration Key"
        value={specialKey}
        disabled={loading}
        // onKeyPress={e => (e.key === 'Enter' ? completeLogin() : () => {})}
        fullWidth
      />
    );
  }

  function RegistrationKeyInput() {
    const isLogin = window.location.href.includes("login");
    if (isLogin) {
      return null;
    }
    return <KeyInput />;
  }

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
      <RegistrationKeyInput />

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
}

AuthForm.propTypes = {
  loading: PropTypes.bool,
  setUsername: PropTypes.func,
  setSpecialKey: PropTypes.func,
  specialKey: PropTypes.func,
  username: PropTypes.func,
  password: PropTypes.func,
  setPassword: PropTypes.func,
  submitted: PropTypes.func,
  completeLogin: PropTypes.func,
  completeSignup: PropTypes.func,
  buttonLabel: PropTypes.func,
  error: PropTypes.objectOf(PropTypes.string),
  classes: PropTypes.shape({
    input: PropTypes.string
  })
};

export default AuthForm;
