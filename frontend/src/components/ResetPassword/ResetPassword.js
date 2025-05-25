
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import {
  ValidatorForm,
  TextValidator
} from 'react-material-ui-form-validator';

import {
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import passwortZurück from "../../img/pass.svg";
import { hashPassword } from '../security/crypto';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import resetStyle from "./ResetStyle";
import Flip from 'react-reveal/Flip';
import { Helmet } from "react-helmet";
import Page from "react-page-loading";


export default function ({ match }) {

  const history = useHistory();


  // der paramter token kommt aus der react router
  // da unsere url /activate/:token ist

  const token = match.params.token;

  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [pwMatch, setPwMatch] = React.useState(false);

  const [field, setField] = React.useState({
    password: '',
    confirmPassword: ''
  });

  const { password, confirmPassword } = field;

  ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
    return password === confirmPassword;
  });

  const change = e => {
    setField({ ...field, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "password": setPwMatch(e.target.value === confirmPassword); break;
      case "confirmPassword": setPwMatch(password === e.target.value); break;
      default: setPwMatch(password === confirmPassword);
    }
  }

  const submit = async e => {
    e.preventDefault()
    try {
      const result = await axios.put(`/users/changePassword/${token}`, {
        password: hashPassword(field.password)
      });
      if (result.status === 200) {
        history.push('/login');
      } else {
        setError(new Error('Token ist ungültig!'));
      }
    } catch (e) {
      console.log('@', e);
      setError(e);
    }
  }
  const classes = resetStyle()
  const NewPasswordPageTitle = "Mars Tischtennis 2020 e.V./NewPassword";

  return (
    <div
      className={classes.cardAdj}
    >
      <Page loader={"bar"} color={"white"} size={9} duration={1}>
        <Helmet>
          <title>{NewPasswordPageTitle}</title>
        </Helmet>
        <Flip left>
          <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={passwortZurück}
        />

              <CardContent>
                <ValidatorForm
                  onSubmit={submit}
                  onError={e => console.log(e)}
                >
                  {!error ? null :
                    <Paper >{error.toString()}</Paper>
                  }
                  <Typography variant="body2"
                    className={classes.adjCen}
                  >
                    <TextValidator
                      label="Passwort"
                      type={showPassword ? 'text' : 'password'}
                      name="password" value={field.password} onChange={change}
                      validators={[
                        'required',
                        'matchRegexp:^[a-zA-Z0-9.!?:@ ]{10,64}$'
                      ]}
                      errorMessages={[
                        'Dieses Feld ist erforderlich!',
                        'Mindestens 10 Zeichen'

                      ]}
                    />
                  </Typography>

                  <Typography variant="body2"
                    className={classes.adjCen}
                  >
                    <TextValidator
                      autoComplete="off"
                      label="Passwort bestätigen"
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword" value={field.confirmPassword} onChange={change}
                      validators={['isPasswordMatch']}
                      errorMessages={['Passwörter stimmen nicht überein']}
                    />
                  </Typography>
                  <Typography variant="body2"
                    color="dark"
                    className={classes.adjCen}
                  >
                    <FormControlLabel
                      className={classes.passZeigen}
                      autoComplete="off"
                      control={<Checkbox checked={showPassword} style={{ color: "orange" }} onChange={e => setShowPassword(!showPassword)} />}
                      label="Passwort zeigen"
                    />
                  </Typography>
                  <Typography
                    className={classes.adjAnmReg}
                  >
                     Hast du schon ein Konto?
                     <Link
                      to='/users/login'
                      className={classes.linkStyle}
                    >
                      &nbsp; Anmelden
                     </Link>
                  </Typography>
                  <Typography
                    className={classes.adjAnmReg}
                  >
                    Noch kein Konto? 
                    <Link
                      to='/users/register'
                      className={classes.linkStyle}
                    >
                      &nbsp;  Registrieren!
                    </Link>
                  </Typography>
                </ValidatorForm>
                <CardActions
                  className={classes.buttonAdj}
                >
                  <Button
                    className={classes.buttonEmail}
                    disabled={!pwMatch}
                    variant="contained"
                    onClick={submit}
                  >
                    Speichern
                 </Button>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Flip>
      </Page>
    </div>

  );
}