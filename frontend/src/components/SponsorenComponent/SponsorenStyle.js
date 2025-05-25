import { withStyles} from '@material-ui/core/styles';


const myStyles = withStyles((theme)=> ({
      root: {
            maxWidth: 345,
            backgroundColor:"orange",
            color:"orange",
      },
      media: {
            height: 0,
            width: "100%",
            paddingTop: '56.25%', // 16:9
          },
          color: {
                color: "red"
          },
    
}));

export default myStyles;