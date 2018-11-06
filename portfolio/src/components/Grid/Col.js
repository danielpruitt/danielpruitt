import React from "react";
import "./Col.css";

export const Col = ({size, styleClass, children}) =>
    <div className= {`${size.split(" ").map(size => "col s" + size).join(" ")} ${styleClass}`}>
        {children}
    </div>

export default Col;