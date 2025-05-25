import React    from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
  Paper,
  TextField,
  Button
} from '@material-ui/core';
import passwortZurück from "../../img/reset.png";
import resetStyle from "./ResetStyle";
import Flip from 'react-reveal/Flip';
import { Helmet } from "react-helmet";
import Page from "react-page-loading";


export default function(props){

const classes = resetStyle();
    const [ error, setError ] = React.useState(false);
    const [ field, setField ] = React.useState({ email:'' });

    const submit = async e => {
      try {
        const result = await axios.get(`/users/reset/${field.email}`);
        if ( result.status === 200 ){
          setError('E-Mail ist unterwegs...!');
        } else {
          throw new Error('Nicht möglich!');
        }
      } catch (e){
        setError(e);
      }
    }

    const change = e => setField({...field,[e.target.name]:e.target.value});
    const ResetPageTitle = "Mars Tischtennis 2020 e.V./Reset";

    return (
      <Page loader={"bar"} color={"white"} size={9} duration={1}>
      <Helmet>
        <title>{ResetPageTitle}</title>
      </Helmet>
      <Flip left>
      <div
      className={classes.cardAdj}
      >
      <Paper>

        { ! error ? null :
          <Paper 
         className={classes.emailUnterwegs}
          >{error.toString()}
          </Paper>
        }

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={passwortZurück}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"
          className={classes.passH1}
          >
            Passwort zurücksetzen!
          </Typography>
          <Typography variant="body2"
           color="secondary" 
          className={classes.adjCen}
           >
        <TextField 
        label="E-Mail schicken"  
        name="email" 
        autoComplete="off"
        value={field.email} 
        onChange={change} 
        style={{textAlign:"center"}}
        />
          </Typography>
          <Typography
          className={classes.adjAnmReg}
          >
          Hast du schon ein Konto?
          <Link
           className={classes.linkStyle}
           to='/users/login'
           >
           &nbsp;Anmelden
           </Link>
          </Typography>
          <Typography
          className={classes.adjAnmReg}
          >
          Noch kein Konto? 
          <Link
          className={classes.linkStyle}
          to='/users/register'
          >
          &nbsp;Registrieren!
          </Link>
          </Typography>
        </CardContent>
      <CardActions
      className={classes.buttonAdj}
      >
        <Button
        onClick={submit}
         variant="contained" 
         className={classes.buttonEmail}
         >
        E-Mail Senden
      </Button>
      </CardActions>
      </CardActionArea>
    </Card>
      </Paper>
      </div>
      </Flip>
    </Page>
 );
}