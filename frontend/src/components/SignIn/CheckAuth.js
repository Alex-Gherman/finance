import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function HasAuthCookie(){
    return document.cookie.match(/access_token/) !== null
}

const GetUserInfo = async function GetUserInfo(dispatch,history){
  const result = await Axios.get('/users/profile');
  checkAuthComplete = true;
  if ( result.status === 401 ){
    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    return null
  } else {
    // console.log(result);
    dispatch({type: "SET_CURRENT_USER", payload: result.data});
    // history.push('/profile');
    return result;
  }
}


let checkingAuth = false,
    checkAuthComplete = false;

export default ({})=>{
    const dispatch = useDispatch();
    const history  = useHistory();
    const user = useSelector(state => state.user.currentUser)
    console.log("USER IS:", user);
    if ( checkAuthComplete ) return null;
    if ( HasAuthCookie() && ! checkingAuth ) {
        GetUserInfo(dispatch,history);
        checkingAuth = true;
    };
    return null; 
};

window.GetUserInfo = GetUserInfo