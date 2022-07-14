    import React, { useState} from "react";
    import './styles/App.css';
    import PostList from "./components/PostList";
    import PostForm from "./components/UI/PostForm";



    function App() {
      const [posts, setPosts] = useState(
          [{id:1, title:'Javascript', body: 'Javascript - future of Web' },
          ]);

        /* Ждет на вход новый пост */
      const createPost = (newPost) => {
        setPosts([...posts, newPost])
      }
      // получаем post из дочернего компонента
      const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
      }

        return (
          <div className="App">
              <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title="Posts about Javascript"/>
          </div>
      );
    }

    export default App;
