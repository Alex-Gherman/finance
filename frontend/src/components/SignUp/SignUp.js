import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      &nbsp; Finance App
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate();

  const [showPass, setShowPass] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [field, setField] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = field;

  const change = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  const passHandlerShow = () => {
    setShowPass(!showPass);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(new Error("Passwords do not match"));
      return;
    }
    try {
      const result = await axios.post('http://localhost:5000/api/register', {
        firstName,
        lastName,
        email,
        password,
      });
      if (result.status === 200) {
        navigate("/login");
      } else {
        setError(new Error("Registration failed"));
      }
    } catch (e) {
      setError(new Error("User already exists or registration error"));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar style={{ margin: 8, backgroundColor: "orange" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {error && (
          <Typography component="h3" variant="h6" color="error">
            {error.message}
          </Typography>
        )}
        <form style={{ width: "100%", marginTop: 24 }} noValidate onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <input
                autoComplete="fname"
                onChange={change}
                name="firstName"
                value={field.firstName}
                required
                id="firstName"
                placeholder="First Name"
                autoFocus
                style={{ width: "100%", padding: 8, marginBottom: 8 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                name="lastName"
                onChange={change}
                required
                value={field.lastName}
                id="lastName"
                placeholder="Last Name"
                autoComplete="lname"
                style={{ width: "100%", padding: 8, marginBottom: 8 }}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                name="email"
                onChange={change}
                required
                value={field.email}
                id="email"
                placeholder="Email Address"
                autoComplete="email"
                style={{ width: "100%", padding: 8, marginBottom: 8 }}
              />
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  name="password"
                  onChange={change}
                  required
                  value={field.password}
                  placeholder="Password"
                  type={showPass ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  style={{ width: "100%", padding: 8, marginBottom: 8 }}
                />
                {showPass ? (
                  <VisibilityIcon onClick={passHandlerShow} style={{ cursor: "pointer" }} />
                ) : (
                  <VisibilityOffIcon onClick={passHandlerShow} style={{ cursor: "pointer" }} />
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              <input
                name="confirmPassword"
                onChange={change}
                required
                value={field.confirmPassword}
                placeholder="Repeat Password"
                type={showPass ? "text" : "password"}
                id="confirmPassword"
                autoComplete="current-password"
                style={{ width: "100%", padding: 8, marginBottom: 8 }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ backgroundColor: "orange", marginTop: 16 }}
            disabled={
              field.confirmPassword !== field.password ||
              field.confirmPassword.length < 10 ||
              field.password.length < 10
            }
            startIcon={<LockOpenOutlinedIcon />}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start" style={{ marginTop: 16 }}>
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}