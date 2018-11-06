import React from "react";
import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";
import Footer from "../components/Footer/Footer";
import Parallax from "../components/Parallax/Parallax";
import RevealCard from "../components/RevealCard/RevealCard";
import "./About.css";





const About = () => {
    return (

        <div>
            <div>
                <Parallax image={require("../images/mountains3.jpg")}/>
            </div>

            <div className="section">
                {/* About Me Container */}
                <Container>
                    <Row>
                        <Col size="4">
                            <img src={require("../images/headshot.JPG")} alt="Daniel Pruitt" className="circle valign-wrapper responsive-img hoverable" />
                        </Col>
                        <Col size="8">
                            <h5 className="custFont center light-blue-text text-darken-1">I'm full stack web developer and perpetual learner. I originally recieved a Bachelor Degree of Arts in Foreign Language and I have considered myself adept at learning languages, whether it is spoken or computer language. The track to be a Spanish teacher was halted when I started building websites and had the desire to learn to code. Since then I have been teaching myself code prior to attending class and receiveing a certificate from the Georgia Institute of Technology. When at Georgia Tech I learned the basic technologies, HTML, CSS, Javascript, and other more powerful technologies. Such technologies include the jQuery, Handlebars, mySQL and Sequelize, MongoDB, Express, React, and Node. Teamwork and collaboration have been a consistent and necessary action to execute the goal of any team I have been on. The world of coding and web development has opened my mind to explore the extensive use of this technology to bring the ultimate experience to the user.</h5>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div>

                <Parallax image={require("../images/mountains6.jpg")} />

            </div>


            {/* Skills Container */}

            <div>
                <Container href="#portfolio">
                    <Row>
                        <Col size="4" >
                            <RevealCard
                                image={require("../images/controller.jpg")}
                                title="Trial of Anima"
                                description="Trial of Anima is a turn based RPG built with React. This game demonstrates the manipulation of the DOM,use of React State, and CSS animations."
                                url="https://trialofanima.herokuapp.com/"
                                github="https://github.com/danielpruitt/TrialOfAnima"
                            />
                        </Col>

                        <Col size="4">
                            <RevealCard
                                image={require("../images/newspaper.jpg")}
                                title="NYT React"
                                description="This New York Times React page is a Full Stack MERN application. The web app utilizes the NYT Api to query the search term and a span of years to return articles to the user. Upon articles loading to the page, a user can save individual articles which will store the data in a Mongo Database. These saved articles can also be deleted."
                                url="https://immense-earth-26245.herokuapp.com/"
                                github="https://github.com/danielpruitt/react-nyt"
                            />
                        </Col>
                        <Col size="4">
                            <RevealCard
                                image={require("../images/beer.jpg")}
                                title="BrewScrape"
                                description="BrewScrape is a web scraper application where the user can pull in news articles from BrewBound. These articles are populated using Handlebars and the comments are stored in a Mongo Database. The comments are populated in the individual cards."
                                url="https://brewscrape.herokuapp.com/"
                                github="https://github.com/danielpruitt/BrewScrape"
                            />
                        </Col>

                        <Col size="4">
                            <RevealCard
                                image={require("../images/game_resize.jpg")}
                                title="React Click Game"
                                description="The React Click Game is a simple front end click game that shows the use of React as a frontend platform and the use of stateful components."
                                url="https://legendaryclicky.herokuapp.com/"
                                github="https://github.com/danielpruitt/clickygame"
                            />
                        </Col>


                        <Col size="4">
                            <RevealCard
                                image={require("../images/burger.jpg")}
                                title="Burger Paradise"
                                description="This specific burger creation app is a full stack app that demonstrates the use of Handlebars, Express, Node, and MySql. Burgers can be logged in an input field, which are then appended to a card with a button to 'Devour' the burger, a list of 'Devoured' burgers are then shown in the third and final card."
                                url="https://legendaryclicky.herokuapp.com/"
                                github="https://github.com/danielpruitt/BurgerSequel"
                            />
                        </Col>
                    </Row>
                </Container>

            </div>
            <div>
                
                <Parallax image={require("../images/mountains7.jpg")} />

            </div>

            {/* <div>
                <Container>
                    <Row>
                        <Col size="12">
                            <h1>This will hold Nodemailer

                            </h1>
                        </Col>
                        

                    </Row>
                </Container>
            </div> */}

            <div>
            
                <Parallax image={require("../images/mountains4.jpg")} />

            </div>

            
        <Footer />
        </div>

    );





};

export default About