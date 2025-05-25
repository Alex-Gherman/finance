import axios from 'axios';
import { instance } from './axios';



export const setCurrentUser = (user) => ({
    type: "SET_CURRENT_USER",
    payload: user
})
export const getCurrentUser =   (dispatch) => {  
    setCurrentUser(dispatch);
    axios.get('/users/profile')
    .then(res =>{ 

        console.log("action res",res.data)

    })

    .catch(err => console.log("action catch err",err))         
}