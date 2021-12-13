import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(0.5),
      width: "25ch",
    },
  },
}));

function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login__form">
      <h1>Hello!</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          inputProps={{ name: "username", ref: register }}
          label="Username"
        />
        <TextField
          inputProps={{ name: "password", ref: register }}
          label="Password"
          type="password"
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
}

export default Login;
