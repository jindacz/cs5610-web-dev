import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <>
            <Link to="/hello">Hello</Link>|
            <Link to="/todo">Todo</Link>|
            <Link to="/hello">Login</Link>
        </>
    )
}
export default Navigation;