import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from "moment";
import {
  TableRow,
  TableCell,
  CardActionArea,
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import axios from 'axios';
import Flip from 'react-reveal/Flip';
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import useStyles from "./ProfileStyle";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// this is how to change date local from en to de
require('moment/locale/de');




const userConnector = connect(
  state => ({ user: state.user.currentUser }),
  dispatch => ({ dispatch })
);

const currentDate = moment().format("LL");
export default userConnector(

  useStyles(
    class Profile extends Component {


      render() {
        const { classes, user } = this.props
        const ProfilePageTitle = "Mars Tischtennis 2020 e.V./Profiles";

        // console.log('"""!!!!!!USER!!!!!!!""', user);
        // console.log("user.imageURL Profile",user.imageURL)
        return (
          <Page loader={"bar"} color={"white"} size={9} duration={1}>
            <Helmet>
              <title>{ProfilePageTitle}</title>
            </Helmet>
      <Flip left>
            <div align="center">
              <Card className={classes.root}>
                <CardActionArea>
        

                  <CardHeader
                    className={classes.headProfile}
                    align="center"
                    title={`Willkommen ${user.firstName}`}
                    subheader={currentDate}
                  />
                </CardActionArea>

            
                  <img 
                  alt="image"
                  src={ user.imageURL && user.imageURL !== null ? `/images/${user.imageURL}` : "https://steam-training.com/wp-content/uploads/2019/03/78fb8f650e763c705c8879a9f5a5c8c0.jpg#.XvnkdD8pTsg.link"}
                   className={classes.imgStyle}
                  />
                  <UploadImage />
              

                <CardContent align="center">
                  <TableRow>
                    <TableCell color="textSecondary">Vorname :</TableCell>
                    <TableCell color="textSecondary">{user.firstName}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell color="textSecondary">Nachname :</TableCell>
                    <TableCell color="textSecondary">{user.lastName}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell color="textSecondary">Email :</TableCell>
                    <TableCell color="textSecondary">{user.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell color="textSecondary">Du bist :</TableCell>
                    <TableCell color="textSecondary">{user.role}</TableCell>
                  </TableRow>
                </CardContent>
              </Card>
            </div>
              </Flip>
          </Page>
        )
      }
    }
  )
)

// Home component! 
const UploadImage = userConnector(useStyles(class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }

  }
  singleFileChangedHandler = (event) => {
    console.log(event.target.files);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  // How to upload th singel file
  singleFileUploadHandler = (event) => {
    const data = new FormData();
    if (this.state.selectedFile) {
      data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
      axios.post('/upload/profile',
        data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
        .then((response) => {
          if (200 === response.status) {
            if (response.data.error) {
            } else {
              let fileName = response.data;
              this.props.dispatch({ type: "SET_CURRENT_USER", payload: response.data.user })
            }
          }
        }).catch((error) => {
        });
    } else {
    }
  };

  deletePicture = async e => {
    const response = await axios.post('/upload/profile/delete', {});
    if (response.data.status === 'ok') {
      this.props.dispatch({ type: "SET_CURRENT_USER", payload: response.data.user })
    }
  }
  render() {
    const { classes, user } = this.props
    
    return (

      <div
        align="center">

        <Typography
          className={classes.typo}
        >
          Sie können ein Bild für Ihr Profil aussuchen!
              </Typography>
        <Typography
          className={classes.typo}
        >
            <input
        accept="image/*"
       // className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={this.singleFileChangedHandler}
        className={classes.input}
        
        />
      <label htmlFor="contained-button-file">
        <Button variant="contained" 
        component="span"
        type="file"
        variant="outlined"
        color="link"
        
        >
          <PhotoLibraryIcon />
          &nbsp;
          Bild auswählen
        </Button>
      </label>
        </Typography>

        <TableRow>

          <Button
            variant="contained"
            className={classes.button2Style}
            onClick={this.singleFileUploadHandler}
          >
              <Link 
                to="/"
                className={classes.linkStyle}
                >
            Hochladen
          </Link>
                </Button>
          <Button
            onClick={this.deletePicture}
            variant="contained"
            className={classes.buttonStyle}
          >
              <Link 
                to="/"
                className={classes.linkStyle}
                >
            Bild löschen
                </Link>
        </Button>
        </TableRow>


      </div>

    );
  }
}
)
)
