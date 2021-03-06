import React from "react";
import PostItem from "./PostItems.js";
import post from "./posts.json"

const PostList = () => {
    return (
            <ul className="list-group">
                {post.map(post => {
            return(<PostItem post={post}/>);
        })
        }
        </ul>
); 
}

export default PostList;