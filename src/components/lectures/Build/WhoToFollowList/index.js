import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json"


const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="recomm-name fw-bold">Who to follow</span></li>
            ${who.map(who => {
                return <WhoToFollowListItem who={who}/>;
            })}
        </ul>
    );
}
export default WhoToFollowList;