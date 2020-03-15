import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const Register = () => {
  return (
    <div>
      Register here
      <form>
        <TextField
          id="registerMail"
          label="E-mail"
          variant="outlined"
          color="secondary"
        />
        <TextField
          id="registerLogin"
          label="Login"
          variant="outlined"
          color="secondary"
        />
        <TextField
          id="registerPassword"
          label="Password"
          variant="outlined"
          color="secondary"
        />
        <Button variant="outlined" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Register;
