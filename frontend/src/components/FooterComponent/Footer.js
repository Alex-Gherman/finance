import React from "react";
import Typography from '@material-ui/core/Typography';
import FooterMatStyle from "./FooterStyle";

const Footer = () => {
      const classes = FooterMatStyle();
      return (
            <div>
                  <footer
                        className={classes.footer}>
                        <Typography
                              className={classes.typo}
                        >
                              Copyright {" "} &copy;  {new Date().getFullYear()}
                                    &nbsp; Mars Tischtennis Düsseldorf e.V.
                              </Typography>
                  </footer>
            </div>
      );
};
export default Footer;