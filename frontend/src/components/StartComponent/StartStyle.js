import { withStyles } from '@material-ui/core/styles';


const useStyles = withStyles(theme => ({
    
    
      imgStyle:{
            borderRadius:"10px",
            height:"500px"
          },
          cardStyle:{
            backgroundColor:"transparent",
            padding:"0",
          },
          cardContent: {
            display:"flex",
            justifyContent:"center",
            backgroundColor:"transparent !important"
          }
}))

export default useStyles;