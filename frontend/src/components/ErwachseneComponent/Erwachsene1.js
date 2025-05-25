import React, { useState  } from 'react';
import Flip from 'react-reveal/Flip';
import './Erwachsene.css';
import Tab from '@material-ui/core/Tab';
import CardMedia from '@material-ui/core/CardMedia';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AppBar from '@material-ui/core/AppBar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import MaterialStyle1 from "./ErwachseneStyle1";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Link from '@material-ui/core/Link';
import firstImg from '../../img/herrenMalen.jpg';
import secondImg from '../../img/Tischtennis-onFire.jpg';
import thirdImg from '../../img/Tischtennis-fantasy.jpg';
import forthImg from "../../img/tischtennis-angry.jpg";
import fifthImg from "../../img/Tischtennisreflex.jpg";
import sixthImg from "../../img/Tischtennis-hee.jpg";
import seventhImg from "../../img/tischtennisKreativee.jpg";
import eighthImg from "../../img/TischtennisPair.jpg";
import Page from "react-page-loading";
import { Helmet } from "react-helmet";




function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const ErwachsenePageTitle = "Mars Tischtennis 2020 e.V./Erwachsene";
    
    return (
        <Page loader={"bar"} color={"white"} size={9} duration={1}>
                <Helmet>
                      <title>{ErwachsenePageTitle}</title>
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

const Erwachsene = (props) => {
    
    const classes = MaterialStyle1();
    const [value, setValue] = React.useState(0);
    const img1 = firstImg ; const img2 = secondImg ;const img3 = thirdImg;const img4=forthImg;
    const img5 = fifthImg ; const img6 = sixthImg ;const img7 = seventhImg;const img8=eighthImg;

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
            <Tab className={classes.tab} label="Unsere Erwachsenen-Mannschaften I-VI" {...a11yProps(0)} />
            <Tab className={classes.tab} label="I. Herren " {...a11yProps(1)} />
            <Tab className={classes.tab} label="II. Herren " {...a11yProps(2)} />
            <Tab className={classes.tab} label="III. Herren" {...a11yProps(3)} />
            <Tab className={classes.tab} label="IV. Herren" {...a11yProps(4)} />
            <Tab className={classes.tab} label="V. Herren " {...a11yProps(5)} />
            <Tab className={classes.tab} label="VI. Herren " {...a11yProps(6)} />
            <Tab className={classes.tab} label="VII. Erwachsene " {...a11yProps(7)} />
            

          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
            <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img1}
                />
            </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>Unsere Erwachsenen-Mannschaften I-VI</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="#link">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>Unsere Erwachsenenmannschaften spielen in verschiedenen Leistungsklassen. Angefangen von der Verbandsliga über die Bezirksklasse bis hin in die Kreisklassen.  Somit  gibt es beim Mars-Tischtennis für jeden sportlichen Ehrgeiz ein Forum, in dem man sich sportlich entwickeln kann. Wir suchen immer Verstärkung für alle unserer Mannschaften, deshalb kann jeder der sich hierfür berufen fühlt, gerne zu einem Probetraining vorbeischauen.</p>
                    </Typography>
                    <Typography className={classes.scheduleStyle}>
                    <h4>Unsere Trainingszeiten:</h4>
                    </Typography>
                    <Typography className={classes.scheduleStyle}>
                    <p>Dienstag:     20 : 00 - 21 : 30 Uhr</p>
                    </Typography>
                    <Typography className={classes.scheduleStyle}>
                    <p>Mittwochs:  18 : 45 - 21 : 30 Uhr</p>
                    </Typography>
                    <Typography className={classes.scheduleStyle}>
                    <p>Freitags:      18 : 45 - 21 : 30 Uhr( bei Spielbetrieb steht nicht die ganze Halle zur Verfügung).</p>
                    </Typography>

                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
        <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img2}
                />
                </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>I. Herren - NRW-Liga Gruppe 2</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="https://www.mytischtennis.de/clicktt/WTTV/20-21/ligen/NRW-Liga-2/gruppe/384503/tabelle/gesamt/">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>Unsere erste Mannschaft hat den Aufstieg in die NRW-Liga geschafft und wird dort unseren Verein in der Saison 2020/21 vertreten. Durch zwei Neuzugänge hat sich die Mannschaft nochmals verstärkt und hofft so, im ersten Jahr in der neuen Spielklasse nichts mit dem Abstieg zu tun zu haben.Die Trainingsmöglichkeiten sind jedenfalls gut. Wir sind in der Lage, an 3 Tagen in der Woche  Trainingsmöglichkeiten bereitstellen zu können.</p>
                    </Typography>
                    <Typography className={classes.aufstellungStyle}>
                    <h4>Aufstellung:</h4>
                    </Typography>
                    <List
                    className={classes.listStyle}>
                    <ListItem>01- Ciamac</ListItem>
                    <ListItem>02- Jörg </ListItem>
                    <ListItem>03- Niklas </ListItem>
                    <ListItem>04- Arja </ListItem>
                    <ListItem>05- Radoslaw </ListItem>
                    <ListItem>06- Andre </ListItem>
                    <ListItem>07- Raphael </ListItem>
                    </List>

                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
        <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img3}
                />
        </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>II. Herren - Bezirksklasse 7</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="https://www.mytischtennis.de/clicktt/WTTV/20-21/ligen/Bezirksklasse-7/gruppe/383717/tabelle/gesamt/">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>"Mit der gegenüber der letzten Saison nur geringfügig geänderten Aufstellung startet die II. Mannschaft in die Spielzeit 2017/18 in der 1.  Kreisliga A.  Auf dem Mannschaftsfoto fehlen leider die Spieler Florian Gerwig und Stefan Rosendahl.Nach der verkorksten letztjährigen Spielzeit, die mit dem Abstieg aus der Bezirksklasse endete, wollen wir nun versuchen mit mehr Spaß am Spiel, neuem Teamgeist und viel Training den Abstand zur I. Herrenmannschaft etwas zu verringern.</p>
                    </Typography>
                    <Typography className={classes.aufstellungStyle}>
                    <h4>Aufstellung:</h4>
                    </Typography>
                    <List
                    className={classes.listStyle}>
                    <ListItem>01- Raphael </ListItem>
                    <ListItem>02- Stephan </ListItem>
                    <ListItem>03- Peter     </ListItem>
                    <ListItem>04- Timo       </ListItem>
                    <ListItem>05- Pavel       </ListItem>
                    <ListItem>06- Ulrich      </ListItem>
                    <ListItem>07- Marcel   </ListItem>
                    </List>


                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
                <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img4}
                />
                </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>III. Herren - Kreisliga A2</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="https://www.mytischtennis.de/clicktt/WTTV/19-20/ligen/Herren-Kreisliga-A-2/gruppe/356663/tabelle/gesamt">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>Unsere dritte Mannschaft ist eine Mannschaft, in dem der persönliche Aspekt sehr heraussticht. Hier ist der Zusammenhalt, Freundschaft und das Vereinsleben sehr stark verankert. Das bedeutet allerdings nicht, dass die Spiele in der Kreisliga A2 nicht ernst genommen werden. Ganz im Gegenteil. Dies ist eine der Mannschaften die regelmäßig vollständig beim Training erscheinen und mit starker Willenskraft an die Meisterschaftsspiele herangeht.  Das verdient den Respekt von allen Vereinsmitgliedern.</p>
                    </Typography>
                    <Typography className={classes.aufstellungStyle}>
                    <h4>Aufstellung:</h4>
                    </Typography>
                    <List
                    className={classes.listStyle}>
                    <ListItem>01- Patrick</ListItem>
                    <ListItem>02- Stefan</ListItem>
                    <ListItem>03- Christian</ListItem>
                    <ListItem>04- Florian</ListItem>
                    <ListItem>05- Dietmar</ListItem>
                    <ListItem>06- Florian</ListItem>
                    <ListItem>07- Apat</ListItem>
                    <ListItem>08- Eugen</ListItem>
                    </List>

                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
               <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img5}
                />
                </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>IV. Herren - Kreisklasse A2</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="https://www.mytischtennis.de/clicktt/WTTV/19-20/ligen/Herren-1-Kreisklasse-A-2/gruppe/356749/tabelle/gesamt">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>Die vierte Mannschaft galt bisher als nicht Abstiegsmannschaft des Vereins. Es  war zwar immer ein Kampf in der 1. Kreisklasse A2 doch am Ende konnte man sich immer vor dem Abstieg retten.  In diesem Jahr ist aber alles anders. Trotz oder wegen der guten Ersatzleute aus der fünften Mannschaft und dem Neuzugang Julian Emde steht die Mannschaft auf dem 1. Tabellenplatz und der Aufstieg scheint nur noch reine Formsache zu sein.</p>
                    </Typography>
                    <Typography className={classes.aufstellungStyle}>
                    <h4>Aufstellung:</h4>
                    </Typography>
                    <List
                    className={classes.listStyle}>
                    <ListItem>01- Andreas   </ListItem>
                    <ListItem>02- Roland </ListItem>
                    <ListItem>03- Leon   </ListItem>
                    <ListItem>04- Julian   </ListItem>
                    <ListItem>05- Michael   </ListItem>
                    <ListItem>06- Klaus   </ListItem>
                    <ListItem>07- Mik </ListItem>
                    </List>
                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={5}>
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
                <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img6}
                />
                </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>Herren - Kreisklasse B2</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="https://www.mytischtennis.de/clicktt/WTTV/19-20/ligen/Herren-1-Kreisklasse-B-2/gruppe/356751/tabelle/gesamt">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>Unsere fünfte Mannschaft spielt in der 1. Kreisklasse B2 und das in diesem Jahr sehr erfolgreich. Als Tabellendritte hat sie das vor der Saison angestrebte Ziel des Aufstiegs bereits 3 Spieltage vor Ende der Rückrunde erreicht. Hierzu von Vorstand und den übrigen Mitgliedern herzlichen Glückwunsch.</p>
                    </Typography>
                    <Typography className={classes.aufstellungStyle}>
                    <h4>Aufstellung:</h4>
                    </Typography>
                    <List
                    className={classes.listStyle}>
                    <ListItem>01- David   </ListItem>
                    <ListItem>02- Frank </ListItem>
                    <ListItem>03- Lothar </ListItem>
                    <ListItem>04- Ralf </ListItem>
                    <ListItem>05- Michael </ListItem>
                    <ListItem>06- Leon </ListItem>
                    <ListItem>07- Lars</ListItem>
                    <ListItem>08- David </ListItem>
                    </List>


                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={6}>
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
                <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img7}
                />
                </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>VI. Herren - Kreisklasse 2</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="https://www.mytischtennis.de/clicktt/WTTV/19-20/ligen/Herren-2-Kreisklasse-2/gruppe/356753/tabelle/gesamt">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>Unsere sechste Mannschaft spielt in der 2. Kreisklasse GR.2.  Dies ist die Startklasse für Tischtennismannschaften auf Vereinsebene. In dieser Mannschaft wird versucht jedem Spielpraxis im Meisterschaftsbetrieb zu geben. Deshalb steht hier die Freude am Tischtennissport  und das Zusammengehörigkeitsgefühl im Vordergrund . Trotzdem darf der Ehrgeiz nicht unter den Tisch fallen und jeder der bei den Meisterschaftsspielen zeigt, dass er mehr kann, kommt automatisch in die nächst höheren Mannschaft, wo er sich wieder beweisen kann. Jede Mannschaft hat einen Mannschaftskapitän der sich um die Aufstellung sowie die Verwaltung kümmert.</p>
                    </Typography>
                    <Typography className={classes.aufstellungStyle}>
                    <h4>Aufstellung:</h4>
                    </Typography>
                    <List
                    className={classes.listStyle}>
                    <ListItem>01- Klemens  </ListItem>
                    <ListItem>02- Hari </ListItem>
                    <ListItem>03- Andre   </ListItem>
                    <ListItem>04- Sven   </ListItem>
                    <ListItem>05- Luca  </ListItem>
                    <ListItem>06- Roman   </ListItem>
                    <ListItem>07- Achim  </ListItem>
                    <ListItem>08- Youness  </ListItem>
                    </List>
                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={7}>
            <Card
            className={classes.root}
            alignContent="center"
            >
            <CardActionArea>
                <Flip left>
                <CardMedia
                    className={classes.media}
                    image={img8}
                />
                </Flip>
                <CardContent>
                    <Typography className={classes.headTypo}>
                    <h3>VII. Erwachsene - Kreisklasse 2</h3>
                    </Typography>
                    <Link 
                        target="blanket"
                        className={classes.linkStyle}
                        href="https://www.mytischtennis.de/clicktt/WTTV/19-20/ligen/Herren-2-Kreisklasse-2/gruppe/356753/tabelle/gesamt">
                        &nbsp; <AttachmentIcon />
                        My Tischtennis
                    </Link>
                    <Typography className={classes.content1Text}>
                    <p>Wir sind die siebte Mannschaft und spielen in der zweiten Kreisklasse. Bei uns geht es vor allem um den Spaß am Tischtennisspiel. Da wir einige Späteinsteiger im Tischtennissport haben, liegt unser Augenmerk auf Spielkultur und Sportsgeist.</p>
                    </Typography>
                    <Typography className={classes.aufstellungStyle}>
                    <h4>Aufstellung:</h4>
                    </Typography>
                    <List
                    className={classes.listStyle}>
                    <ListItem>01- Joachim-Paul </ListItem>
                    <ListItem>02- Karl-Michael</ListItem>
                    <ListItem>03- Hugo </ListItem>
                    <ListItem>04- Paul </ListItem>
                    <ListItem>05- Helmut </ListItem>
                    <ListItem>06- Fredy </ListItem>
                    <ListItem>07- Pavel-Alexandru </ListItem>
                    <ListItem>08- Anke </ListItem>
                    <ListItem>09- Doreen </ListItem>
                    <ListItem>10- Jonathan </ListItem>
                    <ListItem>11- Frank </ListItem>
                    <ListItem>12- Irene </ListItem>
                    <ListItem>13- Reinhard </ListItem>
                    <ListItem>14- Yvonne </ListItem>
                    </List>


                </CardContent>
            </CardActionArea>
            </Card>
        </TabPanel>
        
      </div>
      
  
    );
  }
  export default Erwachsene;