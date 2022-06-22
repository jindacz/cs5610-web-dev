import React from "react";
import {useSelector} from "react-redux";


const Hello = () => {
    const message = useSelector((state) => state.hello);
    const count = useSelector((state) => state.count);
    
    // console.log(useSelector((state) => state.hello))
    return(
        <h2>{message}{count}</h2>
    )
}

export default Hello;