import React from "react";

const Parallax = (props) => (
        <div className="parallax-container">
            <div className="parallax">
                <img src={`${props.image}`} />
            </div>
        </div>
    
);

export default Parallax;