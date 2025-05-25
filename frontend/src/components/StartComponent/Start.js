import React from 'react';
import '../../App.css';
import Page from "react-page-loading";
import Slide from 'react-reveal/Slide';
import { Helmet } from "react-helmet";
import useStyles from "./StartStyle";
import startImg from "../../img/Mars.png";
import {
      TableRow,
      TableCell,
      CardActionArea,
      Card,
      CardHeader,
      CardMedia,
      CardContent,
      Button,
      Input,
      Typography,
    } from "@material-ui/core";

export default useStyles( class Start extends React.Component {
      render() {
            const {classes} = this.props
            const StartPageTitle = "Mars Tischtennis 2020 e.V./Start";

            return (
                  <Page loader={"bar"} color={"white"} size={9} duration={1}>
                        <Helmet>
                              <title>{StartPageTitle}</title>
                        </Helmet>
                        <Slide left>

                        <div>
                        <Card
                       className={classes.cardStyle}
                        >
                              <CardContent
                           className={classes.cardContent}
                           >
                        
                                    <img 
                   className={classes.imgStyle}

                                          src={startImg}
                                    />
                              </CardContent>
                        </Card>
                        </div>
                        </Slide>
                  </Page>
            )
      }
}
)

