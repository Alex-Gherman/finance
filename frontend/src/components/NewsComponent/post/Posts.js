import React, { useState, useEffect, Profiler } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { IfRole } from "../../security/rolesCheck";
import { findLastIndex } from "lodash";
import { TextareaAutosize } from "@material-ui/core";
import useStyles from "./PostsStyle";
import Flip from "react-reveal/Flip";



const userConnector = connect(
  (state) => ({ user: state.user.currentUser }),
  (dispatch) => ({ dispatch })
);

export default userConnector(function PostList() {
  const classes = useStyles();
  const [call, setCall] = useState(false);
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const url = `/news`;
    const res = await axios.get(url);

    setPost(res.data);
  };
  useEffect(() => {
    if (!call) {
      setCall(true);
      getPost();
    }
  }, [post]);

  return (
    <div className={classes.news}>
      {post
        ? post.map((post) => {
            return (
              
              <Paper className={classes.paper}>
          
                <Card className={classes.root}>
                    <CardActionArea>
                  <Flip left>
                      <CardMedia
                        className={classes.media}
                        //image={post.photo}
                        title=""
                        image={post.photo}
                      />
                      </Flip>
                      <CardContent>
                        <Typography
                          align="center"
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className={classes.typo}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          className="font-weight-bold"
                          align="center"
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <IfRole role="Admin">
                      <Typography className={classes.editField}>
                        <CardActions>
                          <Link
                            to={`/post/edit/${post._id}`}
                            className={classes.link}
                          >
                            <Button className={classes.button}>
                              Bearbeiten
                            </Button>
                          </Link>
                        </CardActions>
                      </Typography>
                      <CardActionArea>
                <div
                style={{
                  display:"flex",
                  justifyContent:"space-around"
                  }}
                >
                <Typography
                > {post.postedBy}</Typography>
                <Typography
                style={{
                  display:"flex",
                  textAlign:"center",
                  }}
                > { 
                  new Date(post.created).toLocaleDateString()}</Typography>
                </div>
               </CardActionArea>
                    </IfRole>

                    <IfRole role="Captain">
                      <Typography className={classes.editField}>
                        <CardActions>
                          <Link
                            to={`/post/edit/${post._id}`}
                            className={classes.link}
                          >
                            <Button size="small" className={classes.button}>
                              Bearbeiten
                            </Button>
                          </Link>
                        </CardActions>
                      </Typography>
                    </IfRole>
                
                </Card>
              </Paper>
            );
          })
        : null}
    </div>
  );
});
// class Posts extends Component {
//     render(){
//         return (   <div className="jumbotron">Posts</div>

//         );
//     };

// }

// export default Posts;
