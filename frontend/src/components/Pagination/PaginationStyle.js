import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
      paginateButton: {
            "& > *": {
                  marginTop: theme.spacing(2)
            },
      },
      navStyle: {
            marginBottom: "1ch",
            marginTop: "1ch"
      },
      pageLink: {
            borderRadius: "10px",
            backgroundColor:"orange",
            "&:hover":{
                  backgroundColor:"white !important"
            },
            "&:active":{
                  backgroundColor:"white !important"
            }
      },
}));

export default useStyles