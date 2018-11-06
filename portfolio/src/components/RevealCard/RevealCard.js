import React from "react";
import "./RevealCard.css"


const RevealCard = (props) => (
    <div className="card">
        <div className="card-image waves-effect waves-block waves-dark">
            <img className="activator cardImage" src={`${props.image}`} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
            <p><a href={`${props.url}`} target="_blank" /> Go to {props.title}.</p>
        </div>
        <div className="card-reveal">
            <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
            <p>{props.description}</p>
        </div>
    </div>

);

export default RevealCard;