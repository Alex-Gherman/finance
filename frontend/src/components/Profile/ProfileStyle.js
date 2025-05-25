import { withStyles } from "@material-ui/core/styles";

const useStyles = withStyles(theme => ({
      root: {
        marginBottom:"29px",
        maxWidth:"500px",
      },
      media: {
        height: "auto",
        paddingTop: "100%", // 16:9
        borderRadius:"15px",
        boxShadow:"5px 5px 5px black",
        margin:"30px",
      },
      headProfile: {
        backgroundColor:"orange",
      },
      buttonStyle: {
        fontWeight:"bolder",
        backgroundColor:"red",
        color:"white",
        marginTop:theme.spacing(2),
        "&:hover":{
          backgroundColor:"orange !important",
    }
      },
      button2Style: {
        fontWeight:"bolder",
        backgroundColor:"green",
        color:"white",
        marginTop:theme.spacing(2),
        "&:hover":{
          backgroundColor:"orange !important",
    }
      },
      row: {
        backgroundColor:"green",
        justifyContent:"center"
      }, 
      typo:{
        marginBottom:theme.spacing(1),
        fontFamily: "'Oswald', sans-serif !important",  

      },
    input:{
      display:"none"
    },
    imgStyle:{
      borderRadius:"20px",
      marginTop:"10px",
      height:"266px"
    },
    linkStyle: {
      color:"white",
      "&:hover":{
        color:"black !important",
        textDecoration:"none",
  }
    },
    }
    ));

    export default useStyles;