import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return ( /* map для каждого поста отрисовывает post item и как props передаем туда обьект */
        <div>
            <h1>{title}</h1>
            {posts.map(post =>  <PostItem post={post} key={post.id}/> )}

        </div>
    );
};

export default PostList;