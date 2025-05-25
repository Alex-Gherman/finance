import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
      root: {
        maxWidth: 345,
      },
      passH1:{
            display:"flex",
            justifyContent:"center",
            fontWeight:"bolder",
            fontFamily: "'Open Sans', sans-serif",

      },
      buttonEmail:{
            backgroundColor:"orange",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight:"bolder",
            "&:hover":{
                  color:"white",
                  backgroundColor:"orange"

                }
      },
      buttonAdj:{
            display:"flex",
            justifyContent:"center",
      },
      adjCen:{
            display:"flex",
            justifyContent:"center",
            color:"orange !important"
      },
      cardAdj:{
            display:"flex",
            justifyContent:"center", 
            margin: theme.spacing(3),
      },
      adjAnmReg:{
            display:"flex",
            justifyContent:"center", 
            fontWeight:"bolder",
            margin: theme.spacing(2,2,0),
            fontFamily: "'Open Sans', sans-serif",
      },
      linkStyle:{
            color:"orange",
            textDecoration:"none",
            fontWeight:"bolder",
            "&:hover":{
                  color:"black",
                  textDecoration:"none",
                }
      },
      passZeigen:{
            color:"black",
            margin: theme.spacing(2,2,0),
      },
      emailUnterwegs:{
            backgroundColor:"orange",
            display:"flex",
            justifyContent:"center",
            fontSize:"16px"
      },
      checkboxStyle:{
            color:"orange",

      },
  
    }));


    export default useStyles;