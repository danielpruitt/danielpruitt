import React from "react";

const Body = ({children}) => (
    <div className="container dropColor">
        <div className="row">
            <div className="col s12">
                {children}
            </div>
        
        </div>
    </div>

);

export default Body;