import React from "react";
import {link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <Link to="/hello">Hello</Link>|
            <Link to="/todo">Todo</Link>|
            <Link to="/hello">Login</Link>
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