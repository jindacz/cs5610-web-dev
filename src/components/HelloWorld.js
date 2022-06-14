import React from "react";
import {link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1> Hello World!
                <link to="/pratice">
                    pratice
                </link>
                <link to="/twitter/home">
                    Build
                </link>
            </h1>
        </>
    )
}

export default HelloWorld;