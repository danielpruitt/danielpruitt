import React from "react";
import "./Row.css";

export const Row = ({ children, styleClass }) =>
    <div className={`row ${styleClass}`}>
        {children}
    </div>;

export default Row;
