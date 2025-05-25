import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import MarsLogo from "../../img/MarsTischtennis.png";
import myStyles from "./LogoStyle";





export default myStyles(class Logo extends React.Component {
      render() {
            const{ classes }= this.props
            return (
                  <div className={classes.root}>

                        <Avatar src={MarsLogo} className={classes.medium} />

                  </div>
            )
      }

});
