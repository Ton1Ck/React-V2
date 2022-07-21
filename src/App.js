    import React, { useState} from "react";
    import './styles/App.css';
    import PostList from "./components/PostList";
    import PostForm from "./components/UI/PostForm";
    import MySelect from "./components/UI/select/MySelect";



    function App() {
      const [posts, setPosts] = useState(
          [{id:1, title:'Javascript', body: 'Javascript - future of Web' },
          ]);
        const [selectedSort, setSelectedSort] = useState('')
        /* Ждет на вход новый пост */
      const createPost = (newPost) => {
        setPosts([...posts, newPost])
      }
      // получаем post из дочернего компонента
      const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
      }
      const sortPosts  = (sort) => {
          setSelectedSort(sort);
          setPosts([...posts].sort((a:{...}, b: {...} )  => a[sort].localeCompare(b[sort]))) /*передаем отсортированный массив*/
      }

        return (
          <div className="App">
              <PostForm create={createPost}/>
              <hr/>
                  <div>
                   <MySelect
                       value={selectedSort}
                       onChange={sortPosts}
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'title', name:'По названию'},
                        {value: 'body', name:'По описанию'}
                    ]}
                   />
                  </div>
              {posts.length
                  ?
                  <PostList remove={removePost} posts={posts} title="Posts about Javascript"/>
                  :
                  <div className="post__notfound">Posts were not found</div>
              }

          </div>
      );
    }

    export default App;
