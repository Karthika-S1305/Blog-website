// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Write.css';
import { useNavigate } from "react-router-dom";

const Write = () => {
    const navigate = useNavigate()
    const [article, setArticle] = useState({
        title: '',
        body: '',
        image: ''
    });

    const handleInputChange = (e) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value,
        });
    };

    const handlePost = async () => {
        const savedPosts = JSON.parse(localStorage.getItem('articles')) || [];
        
        const newPost = {
            title: article.title,
            body: article.body,
            image: article.image
        };
        
        const updatedPosts = [...savedPosts, newPost];
        
        localStorage.setItem('articles', JSON.stringify(updatedPosts));
    
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            navigate('/')
        })
        .catch((error) => console.error('Error:', error));
    };
    
    const handleImageUpload = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setArticle({
                ...article,
                image: reader.result
            });
        };
        reader.readAsDataURL(file);
    }
   
    return (
        <div className="write-content">
            <div>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Blog Title"
                    name="title"
                    value={article.title}
                    onChange={handleInputChange}
                />
            </div>
            <textarea
                className="textarea"
                placeholder="Write a blog"
                name="body"
                value={article.body}
                onChange={handleInputChange}
            ></textarea>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <div>
                <button onClick={handlePost}>Post</button>
            </div>
        </div>
    );
};

export default Write;
