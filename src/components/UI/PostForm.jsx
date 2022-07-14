import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title :'', body : ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title :'', body : ''})
        /* Очищаем содержание инпута */
    }

    return (
        <form action="">
            {/*Управляемый Компонент*/}
            <MyInput
                value ={post.title}
                onChange={e => setPost({...post, title: e.target.value})} /*{Достаем значение введеное в Input}*/
                type="text"
                placeholder="Название поста"/>
            {/* Не управляемый Компонент*/}
            <MyInput
                value ={post.body}
                onChange={e => setPost({...post, body: e.target.value})} /*{Достаем значение введеное в Input}*/
                type="text"
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;