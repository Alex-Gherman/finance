import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

card:{
      backgroundColor:"orange",
      margin:theme.spacing(2,0,2),

},
typo: {
      fontWeight:"bolder",
},
button: {
      margin:theme.spacing(1,0,0),
      color:"black",
      backgroundColor:"white",
      "&:hover":{
            backgroundColor:"black !important",
            color:"white",
},
}


}))

export default useStyles;