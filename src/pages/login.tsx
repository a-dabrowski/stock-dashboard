import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  return (
    <div>
      Login Page
      <form>
        <TextField
        id="login"
        label="Login"
        variant="outlined"
        color="secondary"
      />
        <TextField
        id="password"
        label="Password"
        variant="outlined"
        color="secondary"
      />
      <Button variant="outlined" color="primary">
        Login
    </Button>
      </form>
    </div>
  );
}
export default Login;
