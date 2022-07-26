        import React, {useMemo, useState} from "react";
        import './styles/App.css';
        import PostList from "./components/PostList";
        import PostForm from "./components/UI/PostForm";
        import MySelect from "./components/UI/select/MySelect";
        import MyInput from "./components/UI/input/MyInput";



        function App() {
          const [posts, setPosts] = useState(
              [{id:1, title:'Javascript', body: 'Javascript - future of Web' },
              ]);
            const [selectedSort, setSelectedSort] = useState('')
            const[searchQuery, setSearchQuery] =useState('')

            const sortedPosts = useMemo(() => {    /* Следим за выбранным алгоритмом соротировки*/
                console.log('Функция сортировки отработала')
                if(selectedSort){
                    return [...posts].sort((a:{...}, b: {...} )  => a[selectedSort].localeCompare(b[selectedSort]))
                }
                return posts;
            },  [selectedSort,  posts]);
            const sortedAndSearchedPosts  = useMemo(() =>{
                return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
            }, [searchQuery, sortedPosts])
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
               /*передаем отсортированный массив*/
          }

            return (
              <div className="App">
                  <PostForm create={createPost}/>
                  <hr/>
                      <div>
                          <MyInput
                              value={searchQuery}
                              onChange ={e => setSearchQuery(e.target.value)}
                            placeholder="Поиск"
                          />
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
