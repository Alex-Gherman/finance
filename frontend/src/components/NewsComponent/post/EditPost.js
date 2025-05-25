import React, { useState, useEffect, Profiler } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import useStyles from "./EditPostStyle";

const userConnector = connect(
  (state) => ({ user: state.user.currentUser }),
  (dispatch) => ({ dispatch })
);
function PostEditor({ match, user: localUser, dispatch }) {
    const postId = match.params.postId;
    // console.log("id edit user", id);
    // console.log("USER profile eduit",localUser)
  
    const [call, setCall] = React.useState(false);
    const [post, setPost] = React.useState(false);
    const classes = useStyles();
  
    const getPost= async (e) => {
      const url = `/news/post/edit/${postId}`;
      const result = await axios.get(url);
      await setPost(result.data);
    };
    React.useEffect(() => {
      if (!call) {
        setCall(true);
        getPost();
      }
      if (!call) {
        setCall(true)
        axios.get(`/news/post/edit/${postId}`)
          .then(result => {
            setPost(result.data)
            console.log("result data", result.data)
          });
      }
    }, [post])
  
    if (!post) return null
  
    if (!post) return null;
  
    const change = (e) =>
        setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
  
    const submit = (e) => {
      e.preventDefault()
      axios.put(`/news/post/edit/${postId}`, post)
      .then((result) => {
        setPost(result.data);
       
      });
    };
  
    const remove = (e) => {
      e.preventDefault();
      if (!window.confirm("Are u sure?")) return;
      axios
        .delete(`/news/post/edit/${postId}`)
        .then((data) => console.log("Remove"));
    };
    // Delete Pic
    // const deletePicture = async (e) => {
    //   const response = await axios.post("/upload/profile/delete", {});
    //   console.log("respones",localUser)
    //   if (response.data.status === "ok") {
    //     setUser(response.data.user);
    //     if (response.data.user._id == localUser.id)
    //       dispatch({ type: "SET_CURRENT_USER", payload: response.data.user });
    //   }
    // };
   
  
    return (
      <div className="container"
      style={{
        marginTop:"10px"
      }}
>
  <form
            align="center"
            className={classes.form}   
            >

      <Paper
      className={classes.paper}
      >
        <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={post.photo}
        />
        <CardContent>
            <Typography
            align="center"
            className={classes.typo}
            >
            Titel
            </Typography>
          <TextField
          className={classes.textStyle}
            align="center"
           name='title' 
           onChange={change} 
           value={post.title} 
           >
          </TextField>

          <Typography
            align="center"
            className={classes.typo}
          >
          Beschreibung
          </Typography>
          <textarea 
                    className="form-control"
          //className={classes.textStyle}
          name='description' 
          type="text"
          onChange={change} 
          value={post.description} 
          />
        </CardContent>

      <Typography
      className={classes.editField}
       >
                <Button
                size="small" 
                onClick={submit}
                className={classes.button1}
                >
                <Link
               to="/News"
               className={classes.linkStyle}
                >
                  Speichern
                </Link>
                </Button>
                
                <Button 
                size="small"  
                className={classes.button2}
                onClick={remove}
                >
                   <Link
               to="/News"
               className={classes.linkStyle}
                >
                  Löschen
                </Link>
                </Button>
         </Typography>
    </Card>
      </Paper>
            </form>
</div>
            ); 
    
}
export default userConnector(PostEditor);
