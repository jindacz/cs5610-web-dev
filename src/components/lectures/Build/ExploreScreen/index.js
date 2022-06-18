import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

const ExploreScreen = () => {
    return (
        <div className="container">
            <div class="row mt-2 ">
                <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore" />
                </div>

                <div class="col-10 col-lg-6">
                // <ExploreComponent />
                </div>

                <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </div>
    )
}

export default ExploreScreen;


