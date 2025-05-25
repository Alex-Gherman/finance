import React, {useState} from 'react';
import {Card, Button, Paper, Typography, CardHeader, CardActionArea, CardContent }from '@material-ui/core';
import { connect, useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import * as moment from "moment";
import axios from 'axios';
import useStyles from "./NewPost1Style";
require('moment/locale/de');




function NewPost(props) {
    const user = useSelector(state => state.user.currentUser);
    const currentDate = moment().format("LL");
    const classes = useStyles();
    const postData = new FormData();
    
    const [error, setError] = React.useState(false);

    const [field, setField] = React.useState({
        title: "",
        description: "",
        photo: "",
        user:{},
        fileSize: 0,
        loading: false,
        redirectToProfile: false
    });
    const dispatch = useDispatch();
  
  
    const submit = async event => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profileImage',field.photo);
            formData.append('title',field.title);
            formData.append('description',field.description);
               const result = await axios.post(
                   `/news/post/new/${user.id}`,
                    formData,
                    {
                        'Content-Type':'multipart/form-data'
                    }
                );
            
            setField({ loading: true });
            
            user = result.data.user
            
            if (user) {

                setField({
                    loading: false,
                    title: "",
                    description: "",
                    redirectToProfile: true
                });
                
            }
            // const token = result.headers['access_token'];
            // if ( ! token ) throw new Error('login failed');
            // console.log(token)
            
      
          } catch (e) {
              console.error(e)
            setError(e);
          }
          // const {user} = user
        }
      
        
    const change = name => e => {
        if ( e.target.name == 'photo' ) {
               setField({ ...field, photo: e.target.files[0] });
        } else setField({ ...field, [e.target.name]: e.target.value })
    } 


    // if (field.redirectToProfile) {
    //     return <Redirect to={"/news"} />;
    // }
    
   
    
  
    return (

        <div className="container"
        style={{
            backgroundColor:"white",
            padding:"inherit",
            marginTop:"20px"
            }}
        >
         <CardActionArea>
            <CardHeader
                    align="center"
                    title="Neue Nachricht"
                    subheader={currentDate}
                    className={classes.div1}
           />
        </CardActionArea>

            <form
            align="center"
            className={classes.form}   
            >
                <div
             className={classes.div2}
                >
              
                <Typography
                      className={classes.typo}
                  >
          Sie können ein Bild für die Nachricht aussuchen!
              </Typography>
              <Typography
             className={classes.typo}
                  >
                    <input
                      id="contained-button-file"
                       multiple
                        onChange={change("photo")}
                        type="file"
                        name="photo"
                        accept="image/*"
                        className="form-control"
                        style={{
                            padding:"2.4px"
                        }}
                    />
      
        </Typography>


                </div>
                <div className="form-group">
                    <input
                        name="title"
                        onChange={change("title")}
                        type="text"
                        className="form-control"
                        // value=""
                        placeholder="Titel"

                    />
                </div>

                <div className="form-group">
                    <textarea
                        name="description"
                        onChange={change("description")}
                        type="text"
                        className="form-control"
                        placeholder="Beschreibung"
                        // value=""
                        style={{
                            textAlign:"center"
                        }}
                    />
                </div>
               
                <Button
                    onClick={submit}
                    className={classes.button}
                >
               <Link
               to="/News"
               className={classes.linkStyle}
               >
                    Abschicken
                </Link>
                </Button>
        </form>
        </div>
    );
}
export default NewPost;