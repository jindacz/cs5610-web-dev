import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (
        <>
            <div className="wd-search-bar-area position-relative">
                <i className="wd-magnify-glass position-absolute fa fa-search-plus "></i>
                <input className="wd-search-bar ps-5" placeholder="Search Twitter"/>
                <a href="explore-settings.html"> <i className="wd-gear fa fa-cog"></i> </a>
            </div>
            <ul className="nav mb-2 nav-tabs mt-3">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-sm-none d-md-block"
                       href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="list-group">
                <li className="list-group-item p-0 position-relative">
                    <img src="http://placekitten.com/500/300" className="wd-image"/>
                    <label className="wd-image-text">SpaceX's Starship</label>
                </li>
            </div>

            {PostSummaryList()}
        </>
    );
}
export default ExploreComponent;