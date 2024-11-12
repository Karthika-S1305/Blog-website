import { useState, useEffect } from 'react'

const useArtiles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        const savedArticles = localStorage.getItem("articles");
        const parsedArticles = savedArticles? JSON.parse(savedArticles): [];
        setArticles(parsedArticles);
    }, []);
  return articles;
}

export default useArtiles