import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return ( /* map для каждого поста отрисовывает post item и как props передаем туда обьект */
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) =>  <PostItem number={index +1} post={post} key={post.id}/> )}

        </div>/* к каждому посту приклеиваем дату в качестве уникального номера  */
    );
};

export default PostList;