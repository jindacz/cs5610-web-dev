import React from "react";
import './WhoToFollow.css';

const WhoToFollowListItem = (
    who = {
        avatarIcon: '../../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
    }
) => {
    return(
        <li ClassName="list-group-item">
                    <div ClassName="row">
                        <div ClassName="col-2">
                            <img src={who.avatarIcon} width="30"/>
                        </div>
                        <div ClassName="col-8">
                            <div ClassName="fw-bold">{who.userName}
                                <span ClassName="fa-stack font-size-0-5em">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                                </span>
                            </div>
                                               
                            <div>@{who.handle}</div>
                        </div>
                        <div ClassName="col-2">
                            <button ClassName="bg-color-red btn btn-primary mt-1 rounded-pill float-end">Follow</button>
                        </div>
                    </div>
                </li>
        );   
}

export default WhoToFollowListItem;
