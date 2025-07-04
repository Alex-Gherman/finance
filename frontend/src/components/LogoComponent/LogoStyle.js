import {  withStyles } from '@material-ui/core/styles';

const myStyles = withStyles((theme) => ({
      root: {
            display: 'flex',
            '& > *': {
                  margin: theme.spacing(1),
            },
      },
      small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
      },
      large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
            
      },
}));

export default myStyles;