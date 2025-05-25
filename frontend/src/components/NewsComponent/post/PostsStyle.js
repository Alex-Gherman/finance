import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
      
      paper:{
      width:"80%",
      margin:theme.spacing(0,0,2)
      },
      root: {
        margin: theme.spacing(2),
      },
      media: {
        margin: "0 auto",
        borderRadius:"20px",
        marginTop:"10px",
         height:"19rem",
         width:"13.5rem",
         objectFit:"cover"
        
      },
      news: {
        display:"flex",
        justifyContent:"center",
        flexDirection:"column-reverse",
        alignItems: "center",
      },
      typo:{
            fontWeight:"bolder",
      },
      editField: {
            display:"flex !important",
            justifyContent:"center !important"
      },
      button: {
            color:"black",
            backgroundColor:"orange",
            "&:hover":{
            backgroundColor:"black",
            color:"orange",
            }
      },
      link :{
            "&:hover":{
            textDecoration: "none !important",
            }
      },
    
    }));


    export default useStyles;