import React from "react";
import TuitList from "../TuitList/index.js";
import WhatsHappening from "../WhatsHappening/whats-happening.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const HomeScreen = () => {
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher({type:"update-page",currentPage:"home"});
    }, [dispatcher]);
    return (<>
        <WhatsHappening/>
        <TuitList/>
    </>);
};
export default HomeScreen;