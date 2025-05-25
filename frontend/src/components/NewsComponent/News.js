import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import '../../App.css';
import * as moment from "moment";
import { Helmet } from "react-helmet";
import Posts from "./post/Posts";
import Page from "react-page-loading";
import {Card, Button, Paper, Typography, CardHeader, CardActionArea, CardContent }from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
import useStyles from "./NewsStyle";
import {IfRole,} from '../security/rolesCheck';
require('moment/locale/de');


const userConnector = connect(
  state => ({ user: state.user.currentUser }),
  dispatch => ({ dispatch })
);

const News = ({ match, user: currentUser, dispatch }) => {
  
  //console.log("USer News",user)
  const classes = useStyles()
  const NewsPageTitle = "Mars Tischtennis 2020 e.V./All-Users";
  const currentDate = moment().format("LL");

  return(
    
      <Page loader={"bar"} color={"white"} size={9} duration={1}>
      <Helmet>
        <title>{NewsPageTitle}</title>
      </Helmet>
    <IfRole role="Admin">
    <Card
    align="center"
    style={{backgroundColor:"transparent"}}
    >
    <CardContent
    className={classes.card}
      >
      <CardHeader
      //title={`Willkommen zurück Administrator ${user.firstName}`}
      title="Hey Administrator"
      subheader={currentDate}
      />
      <Typography
      className={classes.typo}
      >Klicke, um die neue Nachricht zu posten!</Typography>
      <Link
      style={{textDecoration:"none"}}
      underline="none"
      to="/post/create"
      >
      <Button
     className={classes.button}
      >
      Los geht's
      </Button>
      </Link>
    </CardContent>
    </Card>
    </IfRole>

    <IfRole role="Captain">
    <Card
    align="center"
    >
    <CardContent
    className={classes.card}
      >
      <CardHeader
      //title={`Willkommen zurück Kapitän ${user.firstName}`}
      subheader={currentDate}
      title="Hey Kapitän"

      />
      <Typography
      className={classes.typo}
      >Klicke, um die neue Nachricht zu posten!</Typography>
      <Link
      style={{textDecoration:"none"}}
      underline="none"
      to="/post/create"
      >
      <Button
     className={classes.button}
      >
      Los geht's
      </Button>
      </Link>
    </CardContent>
    </Card>
    </IfRole>

     
      
    <div >
      <Posts />
    </div>
</Page>
)
  }
export default userConnector(News);
