import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

     
     button:{
           backgroundColor:"orange",
           margin: theme.spacing(0,0,2),
           "&:hover":{
                 backgroundColor:"black !important",
                 color:"orange !important"
            }
      },
      typo:{
            margin:"10px",
            display:"flex",
            justifyContent:"center",
      },
      div1:{
            display:"flex",
            justifyContent:"center",
            backgroundColor:"orange",
      },
      div2:{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
      },
      form:{
            margin:"5px"

      },
      linkStyle: {
            color:"black",
            "&:hover":{
              color:"orange !important",
              textDecoration:"none"
        }
          },
      
}
))
      
      export default useStyles;