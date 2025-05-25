import React from 'react';
import Flip from 'react-reveal/Flip';
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import Carousel from 'react-material-ui-carousel';
import { 
      Card, 
      CardContent, 
      CardActionArea,
      CardHeader,
      Grid,
      Paper,
} from '@material-ui/core';
import myStyles from "./SponsorenStyle";
import sponsor1 from "../../img/DCI.png";
import sponsor2 from "../../img/ciamac.jpg";
import sponsor3 from "../../img/noWaiter.svg";
require("moment/locale/de");

export default myStyles(class Sponsoren extends React.Component {

      render() {
            const classes = this.props
            const SponsorenPageTitle = "Mars Tischtennis 2020 e.V./Sponsoren";
         
         
            const  pictures = [

                  {
                        image: sponsor1
                  },
            
                 {
                       image: sponsor2
                 },
                 
                 {
                      image: sponsor3
            },
       
            ]
            
            


            return (
                  <Page loader={"bar"} color={"white"} size={9} duration={1}>
                        <Helmet>
                              <title>{SponsorenPageTitle}</title>
                        </Helmet>
                        <Paper
                        className={classes.paper}
                        style={{
                              marginLeft:"15px",
                              marginRight:"15px",
                              }}
                        >

                              <Card className={classes.root}

                             >
                                    <CardActionArea>
                              <CardHeader
                              align="center"
                              title="Danke an unsere Sponsoren!"
                              style={{
                                    color:"black",
                                    fontWeight:"bolder",
                                    backgroundColor:"orange",
                                    fontFamily: "'Oswald', sans-serif !important",  
                                    }}

                              />
                              <CardContent>
            
                              <Grid container justify="center" spacing={0}>
 
                              <Flip left>
                              <Carousel>{ pictures.map( item => 
                                    <Paper
                                    style={{height:"400px", width:"400px"}}
                                    ><img 
                                    alt="img"
                                    src={item.image} /></Paper>)
                              }</Carousel>
                        </Flip>
                              </Grid> 
                              </CardContent>
                              </CardActionArea>  
                              </Card>
                        </Paper>
                  </Page>
            );
      }
}
)
