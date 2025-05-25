import {  useSelector } from 'react-redux'
import {  withRouter  } from "react-router-dom";

export const IfRole = ({children,role}) => {
    const user = useSelector( state => state.user.currentUser);
    console.log("Roles user",user)
    if ( ! (  user && user.role ) ) return null;
    if ( user.role.includes(role) ) return children;
    return null;
};

export const IfAuth = ({children}) => {
    const user = useSelector( state => state.user.currentUser );
    if ( ! (  user && user.role ) ) return null;
    return children;
};


export const IfNoAuth = ({children}) => {
    const user = useSelector( state => state.user.currentUser );
    if ( ! (  user && user.role ) ) return children;
    return null;
};

export default withRouter((IfRole))