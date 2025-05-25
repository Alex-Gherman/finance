import React, { useContext, useState }                            from 'react';
import {  Link, withRouter, NavLink, useHistory }       from 'react-router-dom'
import {Navbar,Nav,NavDropdown,Form,FormControl}        from 'react-bootstrap'
import                                                       'bootstrap/dist/css/bootstrap.min.css';
import                                                       './Navbar1.css';
import Logo                                             from "../../../img/MarsTischtennis.png";
import axios                                            from "axios";
import {  useSelector }                                 from 'react-redux';
import Avatar                                           from "@material-ui/core/Avatar";
import {CardHeader}                                     from "@material-ui/core";
import { IfRole, IfAuth, IfNoAuth}                      from "../../security/rolesCheck";
import { List } from 'react-bootstrap-icons';

const Toolbar = props => {
    const user = useSelector( state => state.user.currentUser);
    const history = useHistory();
    const { location } = props;
    
    
    
    const signOut= async e=>{
          e.preventDefault();
          // const [error, setError] = React.useState(false);
          // const history = useHistory();
          try {
                await axios.get("/users/signout")
                window.location = '/';
            } catch (error) {
                  console.log(error);
            }
      }
      
      const ProfileRedirect= async e=>{
            e.preventDefault();
            try {
                  await axios.get("/users/")
                  history.push("/profile");
            } catch (error) {
                  console.log(error);
            }
      }

      const [expanded, setExpanded] = useState(false);
      const closeNav = () => setExpanded(false)
         

  return (
      <>
      <Navbar  variant="light"  expand="lg" sticky="top"  
            className="mb-3 navbar1 navbar-fixed-top" activeKey={location.pathname}
            expanded={expanded}
            >

        <Navbar.Brand exact  href="/" eventKey="/" >
        <img width="30" height="30" className="d-iine-block align-top mt-1" alt="logo" src ={Logo}/>
          <span className="text-light navbar-brand1">Mars Tischtennis</span>
          </Navbar.Brand>
          <Navbar.Toggle 
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav" 
          className="text-light" 
          bg="light"
          >
          <List className="text-light" size={40}/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" 	
           >
          <Nav
          activeKey={location.pathname}
          className=" m-auto "
          >
          
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav}  className="text-white " activeClassName="active" as={NavLink} to="/news">Nachrichten</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/erwachsene">Erwachsene</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/jungen">Jungen</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/sponsoren">Sponsoren</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/kontakt">Kontakt</Nav.Link>

            <IfRole role='Captain'>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/playertable">Spielplan</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/users">Kapitän Alle Benutzer</Nav.Link>
            </IfRole>
            <IfRole role='Admin'>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/playertable">Spielplan</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/admin/users">Admin Alle Benutzer</Nav.Link>
            </IfRole>
            <IfRole role='Player'>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/gameplan">Spielplan</Nav.Link>
            </IfRole>
          </Nav>
          <IfNoAuth>
            <Nav.Link style={{display:"flex", justifyContent:"center"}}  onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/register">Registrieren</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}}  onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/login">Anmelden</Nav.Link>
            </IfNoAuth>
            <IfAuth>
              <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={signOut} className=" text-white "  href="">Abmelden</Nav.Link>
              <Nav.Link style={{display:"flex", justifyContent:"center"}}>
                  <CardHeader 
                        avatar={<Avatar onClick={ProfileRedirect} aria-label="recipe" className="avatar"src={ user.imageURL ? `/images/${user.imageURL}` : false} />}
                        />
              </Nav.Link>
            </IfAuth>
                    </Navbar.Collapse>
        </Navbar>
      </>
  );
};
export default withRouter(Toolbar,IfRole)
// export default Toolbar;
