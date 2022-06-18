import React from "react";

const NavigationSidebar = ({ active }) => {
     const isActive = (active, path) => `list-group-item ${active === path ? active : ''}`
     const halfSizeFont = {
          "fontSize": "0.5em"
     };
     return (
          <>
               <div className="list-group">
                    <a className="list-group-item" href="#">
                         <i className="fab fa-twitter"></i>
                    </a>

                    <a className={isActive(active, 'home')}>
                         <i className="fas fa-home"></i>
                         <span className="daa-none d-l-inline-block d-xl-inline-block">Home</span></a>

                    <a className={isActive(active, 'explore')} href="../ExploreScreen/explore.html" >
                         <i className="fas fa-hashtag"></i>
                         <span className="d-none d-l-inline-block d-xl-inline-block">Explore</span></a>

                    <a className={`list-group-item $ Component === " explore" ? "notifications" : ""}`} href="#!">
                         <i className="fas fa-bell"></i>
                         <span className="d-none d-l-inline-block d-xl-inline-block">Notifications</span></a>

                    <a className={`list-group-item $ Component === " explore" ? "messages" : ""}`} href="#" >
                         <i className="fas fa-envelope"></i>
                         <span className="d-none d-l-inline-block d-xl-inline-block">Messages</span></a>

                    <a className={`list-group-item $ Component === " explore" ? "bookmarks" : ""}`} href="#" >
                         <i className="fas fa-bookmark"></i>
                         <span className="d-none d-l-inline-block d-xl-inline-block">Bookmarks</span></a>

                    <a className={`list-group-item $ Component === " lists" ? "active" : ""}`} href="#" >
                         <i className="fas fa-list"></i>
                         <span className="d-none d-l-inline-block d-xl-inline-block">Lists</span></a>

                    <a className={`list-group-item $ Component === " profile" ? "active" : ""}`} href="#" >
                         <i className="fas fa-user"></i>
                         <span className="d-none d-l-inline-block d-xl-inline-block">Profile</span></a>

                    <a className={`list-group-item $ Component === " more" ? "active" : ""}`} href="#" >
                         <i className="fas fa-circle" style={halfSizeFont}></i>
                         <span className="d-none d-l-inline-block d-xl-inline-block">More</span>
                    </a>

               </div >
               <div className="d-grid mt-2">
                    <a href="tweet.html"
                         className="btn btn-primary btn-block rounded-pill">
                         Tweet</a>
               </div>
          </>
     );
}
export default NavigationSidebar;