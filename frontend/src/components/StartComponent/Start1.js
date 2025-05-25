import React from 'react';
import                                                       'bootstrap/dist/css/bootstrap.min.css';
import './Start.css'
import '../../App.css';
import startImg from "../../img/Mars.png";
import Slide from 'react-reveal/Slide';
import Page from "react-page-loading";
import { Helmet } from "react-helmet";
import Image from 'react-bootstrap/Image';

export default  class Start extends React.Component {
    render() {
      const StartPageTitle = "Mars Tischtennis 2020 e.V./Start";
          
          return (
            <Page loader={"bar"} color={"white"} size={9} duration={1}>
            <Helmet>
                  <title>{StartPageTitle}</title>
            </Helmet>
            <Slide left>
            <div className="start">
                <Image className="start-img" src={startImg} fluid />
            </div> 
            </Slide> 
            </Page>
          )
        }
    }