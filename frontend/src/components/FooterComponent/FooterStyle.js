import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

            footer: {
              marginTop: 'auto',
              fontFamily: '"Titillium Web", sans-serif !important',
              fontFamily: "'Open Sans', sans-serif !important",
              backgroundColor:"black",
              textAlign:"center",
              position:"fixed",
              bottom: 0,
              display:"block",
              width:"100vw",
              marginBottom:"0px",
            },
            typo:{
                  color:"white",
                  fontFamily: '"Titillium Web", sans-serif !important',
                  fontFamily: "'Open Sans', sans-serif !important", 
                  fontWeight: "bolder",
            }
}));

export default useStyles;