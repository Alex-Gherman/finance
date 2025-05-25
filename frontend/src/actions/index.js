import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_ERROR } from './types';


export const singUp = data =>{

    return async dispatch =>{
        try{
            console.log("action creator singUp" )
            const res = await axios.post('http://localhost:5000/users/signup', data )
            
            console.log("action creator singUp dispatch" )
            dispatch({
                type:AUTH_SIGN_UP,
                payload: res.data.token
            })
            localStorage.setItem('JTW_TOKEN',res.data.token )
        } catch(err){
            dispatch({
                type:AUTH_ERROR,
                payload:'Email is alredy in use FE'
            })
        
        }
    }
}


export const signIn = data =>{
    return async dispatch =>{
        try{
            const res = await axios.post('http://localhost:5000/users/signin', data )
            dispatch({
                type:AUTH_SIGN_UP,
                payload: res.data.token
            })
            localStorage.setItem('JTW_TOKEN',res.data.token )
        } catch(err){
            dispatch({
                type:AUTH_ERROR,
                payload:'Email is alredy in use FE'
            })
        
        }
    }
}