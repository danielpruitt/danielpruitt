import React from "react";
import Body from "../components/Body"

const Skills = () => (
    <Body>
        <div className="col s1"></div>
        <div className="col s3 card hoverable">
            <h5>Front End</h5>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Bootstrap, Materialize, Bulma, UI Kit CSS libraries</li>
                </ul>   
        </div>
        <div className="col s1"></div>
        <div className="col s3 card hoverable">
            <h5>Back End</h5>
                <ul>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySql and Sequelize</li>
                    <li>Handlebars</li>
                    <li>MongoDB and Mongoose</li>
                    <li>React.js</li>
                </ul>   
        </div>
        <div className="col s1"></div>
        <div className="col s3 card hoverable">
            <h5>Miscellaneous</h5>
                <ul>
                    <li>Visual Studio Code</li>
                    <li>Git</li>
                    <li>NPM</li>
                    <li>Yarn</li>
                    <li>JSON</li>
                    <li>API</li>
                    <li>MVC</li>
                    <li>Agile</li>
                </ul>   
        </div>

        
    </Body>

    
);

export default Skills