import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      root: {
            marginBottom:"29px",
            maxWidth:"500px",
          },
          headProfile: {
            backgroundColor:"orange",
            fontWeight:"bolder",
          },
          saveStyle:{
                color:"white",
                backgroundColor:"green",
                fontWeight:"bolder",
                "&:hover":{
                  backgroundColor:"orange"
            }
          },
          buttonStyle: {
            fontWeight:"bolder",
            backgroundColor:"red",
            color:"white",
            marginTop:theme.spacing(2),
            "&:hover":{
              backgroundColor:"orange !important",
              color:"black"
        }
          },
          delStyle:{
            color:"white",
            backgroundColor:"red",
            fontWeight:"bolder",
          "&:hover":{
                backgroundColor:"orange !important"
          }
      },
      imgStyle: {
        borderRadius:"20px",
        marginTop:"10px",
         height:"266px",
         width:"300px",
         objectFit:"cover"
  },
  linkStyle: {
    color:"white",
    "&:hover":{
      color:"white !important",
      textDecoration:"none"
}
  },
    
    }));

    export default useStyles;