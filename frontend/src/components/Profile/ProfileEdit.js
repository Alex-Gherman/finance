import React, { Component } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { result } from "lodash";
import Paper from "@material-ui/core/Paper";
import * as moment from "moment";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import useStyles from "./ProfileEditStyle";
import { connect } from "react-redux";
import {
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
  TextField,
  Input,
  Typography,
  Checkbox,
} from "@material-ui/core";
require("moment/locale/de");

const userConnector = connect(
  state => ({ user: state.user.currentUser }),
  dispatch => ({ dispatch })
);

function ProfileEditor({ match, user: localUser, dispatch }) {
  const id = match.params.id;
  // console.log("id edit user", id);
  // console.log("USER profile eduit",localUser)

  const [call, setCall] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const classes = useStyles();
  const AllUsersPageTitle = "Mars Tischtennis 2020 e.V./All-Users";
  const currentDate = moment().format("LL");

  const getUser = async (e) => {
    const url = `/users/profile/captain/${id}`;
    const result = await axios.get(url);
    await setUser(result.data);
  };
  React.useEffect(() => {
    if (!call) {
      setCall(true);
      getUser();
    }
    if (!call) {
      setCall(true)
      axios.get(`/users/profile/captain/${id}`)
        .then(result => {
          setUser(result.data)
          console.log("result data", result.data)
        });
    }
  }, [user])

  if (!user) return null

  if (!user) return null;

  const change = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const submit = (e) => {
    e.preventDefault()
    axios.put(`/users/profile/captain/${id}`, user)
    .then((result) => {
      setUser(result.data);
      if (result.data.id == localUser.id)
        dispatch({ type: "SET_CURRENT_USER", payload: result.data });
    });
  };

  const remove = (e) => {
    e.preventDefault();
    if (!window.confirm("Are u sure?")) return;
    axios
      .delete(`/users/profile/captain/${id}`)
      .then((data) => console.log("Remove"));
  };
  // Delete Pic
  const deletePicture = async (e) => {
    const response = await axios.post("/upload/profile/delete", {});
    console.log("respones",localUser)
    if (response.data.status === "ok") {
      setUser(response.data.user);
      if (response.data.user._id == localUser.id)
        dispatch({ type: "SET_CURRENT_USER", payload: response.data.user });
    }
  };
 

  return (
    <Page loader={"bar"} color={"white"} size={9} duration={1}>
      <Helmet>
        <title>{AllUsersPageTitle}</title>
      </Helmet>
      <Flip left>
        <div align="center">


          <Card className={classes.root}>
            <CardHeader
              className={classes.headProfile}
              subheader={currentDate}
              align="center"
              title={"Benutzer bearbeiten"}
            />

            <CardContent>
              <img
                alt="image"
                src={
                  user.imageURL
                    ? `/images/${user.imageURL}`
                    : "https://steam-training.com/wp-content/uploads/2019/03/78fb8f650e763c705c8879a9f5a5c8c0.jpg#.XvnkdD8pTsg.link"
                }
                className={classes.imgStyle}
              />
              
              <TableRow>
               
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    id="filled-basic"
                    label="Vorname"
                    variant="filled"
                    value={user.firstName}
                    onChange={change}
                    autoComplete="off"
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <TextField
                    id="filled-basic"
                    label="Nachname"
                    variant="filled"
                    value={user.lastName}
                    onChange={change}
                    autoComplete="off"
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <TextField
                    id="filled-basic"
                    label="email"
                    variant="filled"
                    value={user.email}
                    onChange={change}
                    autoComplete="off"
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <TextField
                    id="filled-basic"
                    label="role"
                  
                    variant="filled"
                    value={user.role}
                    onChange={change}
                    autoComplete="off"
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <TextField
                    id="filled-basic"
                    label="Liga"
                    name="lig"
                    variant="filled"
                    value={user.lig}
                    onChange={change}
                    autoComplete="off"
                  />
                </TableCell>
              </TableRow>

              <Typography>
                <Checkbox
                  type="checkbox"
                  label="Player"
                  style={{ color: "orange" }}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      role: e.target.checked ? "Player" : "User",
                    })
                  }
                  checked={user.role === "Player"}
                />
                Player
              </Typography>

              <Typography>
                <Checkbox
                  type="checkbox"
                  label="User"
                  style={{ color: "orange" }}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      role: e.target.checked ? "User" : "User",
                    })
                  }
                  checked={user.role === "User"}
                />
                User
              </Typography>
            </CardContent>

            <TableRow>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={submit}
                  className={classes.saveStyle}
                >
                <Link 
                to="/"
                className={classes.linkStyle}
                >
                  Speichern
                </Link>
               </Button>
        
              </TableCell>
            </TableRow>
          </Card>
        </div>
      </Flip>
    </Page>
  );
}

export default userConnector(ProfileEditor);