import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter"
import Counter from "./components/Counter";
import './styles/App.css';
import PostItem from "./components/PostItem";



function App() {
  const [likes, setLikes] = useState();

    return (
      <div className="App">
        <PostItem post={{id:1, title:'Javascript', body: 'Javascript - future of Web' }}/>

        {/*<ClassCounter/>*/}
        {/*<Counter/>*/}

      </div>
  );
}

export default App;
