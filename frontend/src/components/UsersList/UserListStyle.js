import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'inline-flex',
            flexWrap: 'wrap',
            backgroundColor: "none",
            justifyContent: "center",
            '& > *': {
                  margin: theme.spacing(1),
            },
      },
      edit: {
            backgroundColor: "orange",
            borderRadius: "15px",
            boxShadow: "2px 2px 2px black",
            marginBottom:theme.spacing(2),
            "&:hover": {
                  textDecoration: "none !important",
            }
      },
      row:{
            display:"flex",
            justifyContent:"center"
      },
      imgStyle: {
            borderRadius:"20px",
            marginTop:"10px",
             height:"266px",
             width:"300px",
             objectFit:"cover"
      },
      
      inputStyle:{
            margin: "0 auto",
            textAlign:"center"
          },
          titleStyle:{
            backgroundColor:"orange",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems:"center",
            fontWeight:"bolder !important",
            fontFamily: "'Open Sans', sans-serif",
            flexDirection:"column",
          },
}));

export default useStyles;