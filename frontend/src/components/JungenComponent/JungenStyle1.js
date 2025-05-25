import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      borderRadius: "15px",
      boxShadow: "5px 5px 5px black",
      margin: theme.spacing(0,2,0),
      padding: theme.spacing(0,0,0),
      

    },
    tabs:{
        backgroundColor:'orange',
        color:"black",
        justifyContent:'space-around',
        margin:'auto'
        // width:''
       
        
    },
    
    appBar:{
      backgroundColor:'orange',
      color:"black",
      
    },
    tab:{
        fontSize:"14px",
        color: 'black',
        fontFamily: 'Open Sans',
        fontWeight: 'bolder',
        margin:"0px !important",
        width:"30vw !important",
    },
    media: {
        height: 300 ,
        margin: 'auto',
        width: 300,
      
      },
    headTypo: {
    fontSize: "35px",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    display: "flex",
    wordBreak: "initial",
    fontWeight: "bolder",
    padding: theme.spacing(2)

  },
  content1Text: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(2)
  },
  scheduleStyle: {
    fontWeight: "bolder",
    fontSize:"15px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  linkStyle: {
    fontSize: "20px",
    color: "orange",
    display: "flex",
    fontWeight: "bolder",
    justifyContent: "center",
    textAlign: "center !important",
    textDecoration:"none !important",
    "&:hover": {
    color: "black !important",
    }
  },
  aufstellungStyle: {
    fontSize: "22px",
    color: "black",
    display: "flex",
    fontWeight: "bolder",
    justifyContent: "center",
    textAlign: "center",
  },
  listStyle: {
    color: "black",
    display: "grid",
    fontWeight: "bolder",
    justifyContent: "center",
    textAlign: "center",
  }
}));
export default useStyles;