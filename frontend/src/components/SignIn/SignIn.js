import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Flip from 'react-reveal/Flip';
import SignInStyle from "./SignInStyle";
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { hashPassword } from '../security/crypto';
import { connect, useDispatch, useSelector } from "react-redux";
import { signIn } from "../../actions/index";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
   &nbsp;  Mars Tischtennis Düsseldorf e.V.
    </Typography>
  );
}

function Anmelden(props) {
  const user = useSelector(state => state.user.currentUser);
  console.log("currentUser!!!! from SIGNIN:", user);

  const history = useHistory();
  const [error, setError] = React.useState(false);

  const [field, setField] = React.useState({
    email: '',
    password: '',
    remember: false,
  });
  const dispatch = useDispatch();


  const submit = async e => {
    axios.post('/users/login', {
      email: field.email,
      password: hashPassword(field.password),
      remember: field.remember
    })
    .catch( error => error.response )
    .then( result => {
      if ( result.status === 500 ){
        setError(result.data.error.message)
        return;
      }
      // alert('Danke für die Anmeldung!')
      // console.log("USERRR",userr);
      const user = result.data.user
      // console.log("user",user);
      if (user) {
        // console.log("DISPATCH:", dispatch({type: "SET_CURRENT_USER", payload: user}));
        history.push("/")
      }
    });
  }

  const change = e => setField({ ...field, [e.target.name]: e.target.value });

  const checkboxChange = e => setField({ ...field, remember: !field.remember });
  const [showPass, setShowPass] = React.useState(false)
  const passHandlerShow = () => {
    setShowPass(!showPass)
  }

  const classes = SignInStyle();
  const SignInPageTitle = "Mars Tischtennis 2020 e.V./SignIn";

  return (

    <Page loader={"bar"} color={"white"} size={9} duration={1}>
      <Helmet>
        <title>{SignInPageTitle}</title>
      </Helmet>
      <Flip left>

        <Container component="main" maxWidth="xs"
          className={classes.signInStyle}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              className={classes.head}
            >
              Anmelden
        </Typography>

            {error ?  <Typography component="h3" variant="h6">
                {error}
              </Typography> : null             
            }


            <form className={classes.form} noValidate>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-Mail Adresse"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={change}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Passwort"
                type={showPass ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={change}
              />
              {showPass ?
                <VisibilityIcon onClick={passHandlerShow} /> :
                <VisibilityOffIcon onClick={passHandlerShow} />
              }
              &nbsp; 
              &nbsp; 
              <FormControlLabel
                control={<Checkbox style={{color:"orange"}}  value="remember" />}
                label="Anmeldung speichern"
                onChange={checkboxChange}
              />
              <Button
                onClick={submit}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ backgroundColor: "orange" }}
                disabled={
                  field.password.length <= 9 ||
                  field.password.length == 0

                   ? true : false 
                 
                }
              >
              <ExitToAppOutlinedIcon />
            &nbsp;
                Anmelden
              </Button>
            
              <Grid container>
                <Grid item xs>
                  <Link to="/reset" variant="body2"
                    className={classes.font}
                  >
                    Passwort vergessen?
              </Link>
                </Grid>
                <Grid item>
                  <Link to='/register' variant="body2"
                    className={classes.font}
                  >
                    {"Noch kein Konto? Registrieren"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Flip>
    </Page>
  );
}



export default connect(null, { signIn })(Anmelden);