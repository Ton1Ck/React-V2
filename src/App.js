import React, {useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";



function App() {
  const [posts, setPosts] = useState(
      [{id:1, title:'Javascript', body: 'Javascript - future of Web' },
          {id:2, title:'Javascript2', body: 'Javascript - future of Web' },
          {id:3, title:'Javascript3', body: 'Javascript - future of Web' },
          {id:4, title:'Javascript4', body: 'Javascript - future of Web' },
      ]);
  const [title, setTitle] = useState('')

    const bodyInputRef = useRef();
  const addNewPost = (e) => {
      e.preventDefault();
    console.log(title);
      console.log(bodyInputRef.current.value);
  }
    return (
      <div className="App">

        <PostList posts={posts} title="Posts about Javascript"/>

          <form action="">
              {/*Управляемый Компонент*/}
              <MyInput
                  value ={title}
                  onChange={e => setTitle(e.target.value)} /*{Достаем значение введеное в Input}*/
                  type="text"
                  placeholder="Название поста"/>
              {/* Не управляемый Компонент*/}
              <MyInput
                  ref ={bodyInputRef}
                  type="text"
                  placeholder="Описание поста"/>
              <MyButton onClick={addNewPost}>Create post</MyButton>
          </form>
      </div>
  );
}

export default App;
