import React from "react";
import HelloWorld from "../hello";
import Todo from "./Todo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//object deconstruct of entire object

const NavigationExample = () => {
    return(
        <>
            <BrowserRouter>
                <Route path="/hello">
                    <HelloWorld/>
                </Route>
                <Route path='/todo'>
                    <Todo/>
                </Route>
            </BrowserRouter>
        </>
    )
};

export default NavigationExample;