import React from "react";
import Body from "../components/Body";
import "./About.css";

const Projects = () => (
    <Body className="body">
        <div className="col s12">
            <div className="card">
                <div className="card-content">
                    <h4>NYT React </h4>
                </div>
                <div className="card-content">
                    <p>This New York Times React page is a Full Stack MERN application. The web app utilizes the NYT Api to query the search term and a span of years to return articles to the user. Upon articles loading to the page, a user can save individual articles which will store the data in a Mongo Database. These saved articles can also be deleted.</p>
                </div>
                <div className="card-action">
                    <a href="https://immense-earth-26245.herokuapp.com/" target="_blank" rel="noreferrer noopener">Link</a>
                </div>
            </div>
        </div>



        <div className="col s12">
            <div className="card">

                <div className="card-content">
                    <h4>BrewScrape</h4>
                </div>
                <div className="card-content">
                    <p>BrewScrape is a web scraper application where the user can pull in news articles from BrewBound. These articles are populated using Handlebars and the comments are stored in a Mongo Database. The comments are populated in the individual cards. </p>
                </div>
                <div className="card-action">
                    <a href="https://brewscrape.herokuapp.com/" target="_blank" rel="noreferrer noopener">>Link</a>
                </div>
            </div>
        </div>

        <div className="col s12">
            <div className="card">

                <div className="card-content">
                    <h4>Burger Paradise</h4>
                </div>
                <div className="card-content">
                    <p>This specific burger creation app is a full stack app that demonstrates the use of Handlebars, Express, Node, and MySql. Burgers can be logged in an input field, which are then appended to a card with a button to "Devour" the burger, a list of "Devoured" burgers are then shown in the third and final card. </p>
                </div>
                <div className="card-action">
                    <a href="https://burgerparadise.herokuapp.com/" target="_blank" rel="noreferrer noopener">>Link</a>
                </div>
            </div>
        </div>

        <div className="col s12">
            <div className="card">

                <div className="card-content">
                    <h4>Seisan</h4>
                </div>
                <div className="card-content">
                    <p>Seisan is a task manager project that was built for the Georgia Tech Coding Bootcamp. This app allows users to log tasks and change the categories the tasks are in. I was in charge of building the back end, specifically the file structure, models, database and HTML routing, and Handlebars. </p>
                </div>
                <div className="card-action">
                    <a href="https://seisantaskmanager.herokuapp.com/" target="_blank" rel="noreferrer noopener">>Link</a>
                </div>
            </div>
        </div>

        <div className="col s12">
            <div className="card">

                <div className="card-content">
                </div>
                <div className="card-content">
                    <p>The React Click Game is a simple front end click game that shows the use of React as a frontend platform and the use of stateful components.</p>
                </div>
                <div className="card-action">
                    <a href="https://legendaryclicky.herokuapp.com/" target="_blank" rel="noreferrer noopener">>Link</a>
                </div>
            </div>
        </div>

    </Body>


);

export default Projects