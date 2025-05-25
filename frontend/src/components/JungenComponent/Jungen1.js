import React, { useState  } from 'react';
import Flip from 'react-reveal/Flip';

import Tab from '@material-ui/core/Tab';
import CardMedia from '@material-ui/core/CardMedia';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AppBar from '@material-ui/core/AppBar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import MaterialStyle1 from "./JungenStyle1";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Link from '@material-ui/core/Link';
import firstImg from '../../img/jungenMalen.jpg';
import secondImg from '../../img/TischtennisMalen.jpg';
import thirdImg from '../../img/Tischtennismood.jpg';
import Page from "react-page-loading";
import { Helmet } from "react-helmet";



const Data = [
    // The first Card
    {
      id: 0,
      img: firstImg,
      title: "Jugend- mannschaften",
      link: "",
      txt: "Unser Nachwuchs ist uns sehr wichtig! Deshalb freuen wir uns über jeden, der Lust hat bei uns mitzuspielen.Von unserem Lizenz-Trainer Jörg Priestley lernen die Kinder und Jugendlichen mit viel Spaß alles was sie brauchen um ein erfolgreicher Tischtennisspieler zu werden.",
      txtBottom: "Unsere Trainingszeiten:",
      txtZeit1: "Mittwochs: 17: 00 - 18 : 45 Uhr",
      txtZeit2: "Freitags: 17: 00 - 18 : 45 Uhr",
      lineup: "",
      player: []
  
    },
  
    // The second Card!
    {
      id: 1,
      img: secondImg,
      title: "Jungen 18",
      link: "https://www.mytischtennis.de/clicktt/WTTV/19-20/ligen/1-Kreisklasse-2-RR/gruppe/365012/tabelle/gesamt/",
      txt: "In unserer 1. Jugend spielen die besten Jugendlichen die unser Verein zu bieten hat. Mit viel Motivation und Leidenschaft versuchen sie bei jedem Meisterschaftsspiel gegen ihre Gegner in der Kreisklasse zu gewinnen.",
      txtBottom: "",
      txtZeit1: "",
      txtZeit2: "",
      lineup: " Aufstellung:",
      player: [
        "01- Youness",
        "02- Jonathan (aus der Jungen-15)",
        "03- Thomas",
        "04- Fabian",
        "05- Yassin",
        "06- Jasira (aus der Jungen-15)",
      ]
    },
    // The third Card!
    {
      id: 2,
      img: thirdImg,
      title: "Jungen 15",
      link: "https://www.mytischtennis.de/clicktt/WTTV/19-20/ligen/1-Kreisklasse-2-RR/gruppe/365009/tabelle/gesamt/",
      txt: "In der Klasse Jungen 15 spielen alle die Lust haben,an Meisterschaftsspielen teil zunehmen und die Lust sich gegen Jugendliche aus anderen Vereinen zu messen. Hier steht vorallem der Spaß und die Lust am Tischtennis im Vordergrund.",
      txtBottom: "",
      txtZeit1: "",
      txtZeit2: "",
      lineup: " Aufstellung:",
      player: [
        "01- Jonathan",
        "02- Lukas",
        "03- Hamza",
        "04- Alessandro",
        "05- Henrik",
        "06- Lenn Morton",
        "07- Nils",
        "08- laurenz"
      ]
    },
  
  
  ]


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const JungenPageTitle = "Mars Tischtennis 2020 e.V./Erwachsene";
    
    return (
      <Page loader={"bar"} color={"white"} size={9} duration={1}>
                 <Helmet>
                      <title>{JungenPageTitle}</title>
                </Helmet>
      <div
      style={{
          backgroundColor:"black",
          }}
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography
            >{children}</Typography>
          </Box>
        )}
      </div>
      </Page>
    );}
  
function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };}

const Jungen = (props) => {
    
    const classes = MaterialStyle1();
    const [value, setValue] = React.useState(0);
    const data = Data

    const handleChange = (event, newValue) => {
        setValue(newValue);
  };
    return (
        <div className={classes.root}>
        <AppBar
         position="static" color="default" className={classes.appBar}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="dark"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab className={classes.tab} label={data[0].title} {...a11yProps(0)} />
            <Tab className={classes.tab} label={data[1].title} {...a11yProps(1)} />
            <Tab className={classes.tab} label={data[2].title} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <Card
      className={classes.root}
      alignContent="center"
    >
      <CardActionArea>
        <CardContent>
          {data[0].img ?
        <Flip left>
            <CardMedia
              className={classes.media}
              image={data[0].img}
              title="mars-tischtennis"
            />
    </Flip>
            : null}
          {data[0].title ?

            <Typography className={classes.headTypo}>
              {data[0].title}
            </Typography>
            : null}
          {data[0].txt ?
            <Typography className={classes.content1Text}>
              {data[0].txt}
            </Typography>
            : null}
          {data[0].txtBottom ?
            <Typography className={classes.scheduleStyle}>
              {data[0].txtBottom}
            </Typography>
            : null}
          {data[0].txtZeit1 ?
            <Typography className={classes.scheduleStyle}>
              {data[0].txtZeit1}
            </Typography>
            : null}
          {data[0].txtZeit2 ?
            <Typography className={classes.scheduleStyle}>
              {data[0].txtZeit2}
            </Typography>
            : null}
        </CardContent>
      </CardActionArea>
    </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
                <Card className={classes.root}
                    alignContent="center"
                >
                <CardActionArea>
                    <CardContent>
                        {data[1].img ?
                        <Flip left>
                            <CardMedia
                            className={classes.media}
                            image={data[1].img}
                            title="mars-tischtennis"
                            />
                        </Flip>
                            : null}
                        {data[1].title ?
                            <Typography className={classes.headTypo}>
                            {data[1].title}
                            </Typography>
                            : null}
                            {data[1].link ?
                            <Link 
                            target="blanket"
                            className={classes.linkStyle}
                            href={data[1].link}>
                            &nbsp; <AttachmentIcon />
                            My Tischtennis
                            </Link>
                            :null}
                        {data[1].txt ?
                            <Typography className={classes.content1Text}>
                            {data[1].txt}
                            </Typography>
                            : null}
                        {data[1].lineup ?
                            <Typography className={classes.aufstellungStyle}>
                            {data[1].lineup}
                            </Typography>
                            : null}
                        {data[1].player.length > 0 ?
                            <List
                            className={classes.listStyle}>
                            {data[1].player.map(player => <ListItem> {player}</ListItem>)}
                            </List>
                            : null}
                    </CardContent>
                </CardActionArea>
            </Card>
    </TabPanel>
    <TabPanel value={value} index={2}>
            <Card className={classes.root}
                alignContent="center"
            >
                <CardActionArea>
                    <CardContent>
                    {data[2].img ?
                <Flip left>
                        <CardMedia
                        className={classes.media}
                        image={data[2].img}
                        title="mars-tischtennis"
                        />
                </Flip>
                        : null}
                    {data[2].title ?
                        <Typography className={classes.headTypo}>
                        {data[2].title}
                        </Typography>
                        : null}
                        {data[2].link ?
                        <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href={data[2].link}>
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                        </Link>
                        :null}
                    {data[2].txt ?
                        <Typography className={classes.content1Text}>
                        {data[2].txt}
                        </Typography>
                        : null}
                    {data[2].lineup ?
                        <Typography className={classes.aufstellungStyle}>
                        {data[2].lineup}
                        </Typography>
                        : null}
                    {data[2].player.length > 0 ?
                        <List
                        className={classes.listStyle}>
                        {data[2].player.map(player => <ListItem> {player}</ListItem>)}
                        </List>
                        : null}
                    </CardContent>
                </CardActionArea>
            </Card>
    </TabPanel>
        
      </div>
      
  
    );
  }
  export default Jungen;