        import React, {useMemo, useState} from "react";
        import './styles/App.css';
        import PostList from "./components/PostList";
        import PostForm from "./components/UI/PostForm";
        import MySelect from "./components/UI/select/MySelect";
        import MyInput from "./components/UI/input/MyInput";
        import PostFilter from "./components/PostFilter";



        function App() {
          const [posts, setPosts] = useState(
              [{id:1, title:'Javascript', body: 'Javascript - future of Web' },
              ]);

          const [filter, setFilter] =useState({sort:'', query:''})

            const sortedPosts = useMemo(() => {    /* Следим за выбранным алгоритмом соротировки*/
                console.log('Функция сортировки отработала')
                if(filter.sort){
                    return [...posts].sort((a:{...}, b: {...} )  => a[filter.sort].localeCompare(b[filter.sort]))
                }
                return posts;
            },  [filter.sort,  posts]);
            const sortedAndSearchedPosts  = useMemo(() =>{
                return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
            }, [filter.query, sortedPosts])
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
                  <PostFilter
                      filter={filter}
                      setFilter={setFilter}
                  />
                  {sortedAndSearchedPosts.length
                      ?
                      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about Javascript"/>
                      :
                      <div className="post__notfound">Posts were not found</div>
                  }

              </div>
          );
        }

        export default App;
