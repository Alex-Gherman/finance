import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

let activating = false;
let errorMessage = false;

function activateRequest ( token, setActivated , setError ){
  activating = true;
  
  axios.get(`/users/activate/${token}`)
  .catch( e => e.response )
  .then( result => {
    console.log("axios get .then Result FE ",result.data.status)
    if ( result.data.status === "success" ){
      setActivated(true); // aktivierung erfolgreich
    } else {
      errorMessage = 'Dieser Link ist verbraucht!'; 
      setError('Dieser Link ist verbraucht!')
    }
  })
}
let oldProps = null
export default function(props){
  const {match} = props;

  // der paramter token kommt aus der react router
  // da unsere url /activate/:token ist
  const token = match.params.token;
 
 

  const [ activated, setActivated   ] = React.useState(false);
  const [ error,     setError       ] = React.useState('');

  

  // wenn ein fehler im state gepeichert wurde,
  //   stelle diesen dar und beende die funktion
  if ( error )
    return <h1 style={{color:'white'}}>{error}</h1>;

  // hier ist activated === true
  // leite den benutzer weiter an die /login seite
  if ( activated )
    return <Redirect to="/login"/>;

    // wenn die aktivierung noch nicht erfolgt ist
  //   sende anfrage an das backend und verabeite das ergebnis
  if ( ! activating ) activateRequest(token,setActivated,setError);

  return <h1 style={{color:'white'}}>Loading !!!!</h1>;
}