import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
     paper: {
           margin:theme.spacing(2,0,0)
     },
      root: {
        maxWidth: 345,
        display:"inline",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        margin:"20px",
      },
      form:{
            margin:"5px",
      },
      media: {
            margin: "0 auto",
             height:266,
             width:300,
             objectFit:"cover",
      },
      textStyle: {
            display:"flex",
            justifyContent:"center",
            margin: theme.spacing(0,0,2)
      },
      button1: {
            color:"white",
            backgroundColor:"green",
            "&:hover":{
            backgroundColor:"orange",
            color:"white",
            }
      },
      button2: {
            color:"white",
            backgroundColor:"red",
            "&:hover":{
            backgroundColor:"orange",
            color:"white",
            }
      },
      editField: {
            display:"flex !important",
            justifyContent:"space-around !important",
            margin: theme.spacing(0,0,2)

      },
      linkStyle: {
            color:"white",
            "&:hover":{
              color:"white !important",
              textDecoration:"none"
        }
          },
          typo:{
            marginTop:"20px",
            display:"flex",
            justifyContent:"center",
            fontWeight:"bolder"
      },
    }));

    export default useStyles;
