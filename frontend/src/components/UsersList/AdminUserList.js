import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import useStyles from "./AdminUserListStyle";
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import Flip from 'react-reveal/Flip';
import {
    TableRow,
    TableCell,
    CardActionArea,
    Card,
    CardContent,
    Paper,
    List,
    Input,
    ListItem
} from "@material-ui/core";
import { FiUsers } from 'react-icons/fi';
import { AlertTitle } from '@material-ui/lab';

require('moment/locale/de');


const AdminsConnector = connect(
    state => ({ user: state.user.currentUser }),
    dispatch => ({ dispatch })
  );

 export default AdminsConnector( function Listt () {
    const [call, setCall] = React.useState(false);
    const [user, setUser] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const getUser = async () =>{
        
        const url = `/admin/users`
        const res =  await axios.get(url)
        await setUser(res.data)
        
        setSearchResults(res.data)

    }
useEffect(()=>{
    if(!call){
        setCall(true)
        getUser()
    }
    
},[user])


// Search filter
useEffect (()=> {
    const results = user.filter((person)=> {
        
        return person.fullName.toLocaleLowerCase().includes(search)
    });
    setSearchResults(results);
}, [search]);


const classes = useStyles();
const AdminUsersPageTitle = "Mars Tischtennis 2020 e.V./Users";

    return (
           <Page loader={"bar"} color={"white"} size={9} duration={1}>
            <Helmet>
              <title>{AdminUsersPageTitle}</title>
            </Helmet>
            <List component="nav" aria-label="contacts">
            <ListItem 
            style={{display:"contents"}}
            >
                        <AlertTitle
        className={classes.titleStyle}
      >
        <FiUsers />
        &nbsp;
        Benutzer
      <Input
          type="text"
          placeholder="Benutzer Suchen..."
          autoComplete="off"
          className={classes.inputStyle}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          value={search}
        />
      </AlertTitle>

                    {searchResults ? (
                        searchResults.map(user => {
                            console.log(user)
                            return(
                          <Flip left>
                                <div 
                            className={classes.root}>

                           <Card 
                           style={{borderRadius:"10px"}}
                           >
                            <Paper
                            variant="outlined"
                            >
                                <CardContent
                                align="center"
                                >
                           <CardActionArea>

                                      <img 
                                      alt="image"
                                      src={user.imageURL ? `/images/${user.imageURL}` : "https://steam-training.com/wp-content/uploads/2019/03/78fb8f650e763c705c8879a9f5a5c8c0.jpg#.XvnkdD8pTsg.link"}
                                      className={classes.imgStyle}
                  />
                           </CardActionArea>
                           { user.activated ? null:

                           <TableRow
                               className={classes.notActivate}
                                
                                >
                                    <TableCell 
                                     color="dark"
                                     
                                     >

                                 User Not Activated  &nbsp;  
                                     </TableCell>
                                </TableRow>
                           }
                                <TableRow
                               className={classes.reg}
                                
                                >
                                    <TableCell
                                     color="dark"
                                     style={{
                                     display: "flex",
                                     textAlign: "center",
                                     backgroundColor: "orange",
                                     borderRadius:"15px",
                                     }}
                                     >

                                 Registriert am : den {new Date (user.date).toLocaleDateString()}
                                     </TableCell>
                                </TableRow>
                                <TableRow
                               className={classes.row}
                                
                                >
                                    <TableCell
                                     color="dark"
                                     >

                                 Name :  &nbsp;  {user.fullName} 
                                     </TableCell>
                                </TableRow>

                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                 Vorname :  &nbsp;  {user.firstName} 
                                     </TableCell>
                                </TableRow>

                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                 Nachname :  &nbsp;  {user.lastName} 
                                     </TableCell>
                                </TableRow>

                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                 Role : &nbsp;   {user.role} 
                                     </TableCell>
                                
                                </TableRow>
                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                 Liga : &nbsp;   {user.lig} 
                                     </TableCell>
                                </TableRow>
                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                 E-Mail :  &nbsp;  {user.email} 
                                     </TableCell>
                                </TableRow>
                               

                                </CardContent>
                               <TableRow
                               className={classes.row}
                               >
                               
                                   <TableCell
                                   className={classes.edit}
                                   >
                                <Link to={`/admin/profile/${user.id}`}
                                style={{color:"black", textDecoration:"none"}}
                                >
                                  Benutzer Bearbeiten
                            </Link>
                                   </TableCell>
                               </TableRow>
                            </Paper>
                            </Card>
                            </div>
                            </Flip>
                            )

                })
                    ) : null}

                </ListItem>
            </List>
        </Page>
    )
})