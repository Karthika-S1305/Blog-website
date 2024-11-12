import { useMemo } from 'react';
import useArticles from './useArticles';
import './Expand.css'

const Expand = () => {
    const articles = useArticles();

    const memoArticle = useMemo(() => articles, [articles]);

  return (
    <div className="expand-details">
            {memoArticle.length>0 ?(
                memoArticle.map((article, index) =>(
                    <div key={index} className="article" >
                        <h1>{article.title}</h1>
                        {article.image && <img src={article.image} alt="thumbnail"/>}
                        <p>{article.body}</p>

                    </div>
                ))
            ):(
                <p>No articles available</p>
            )}
    </div>
  )
}

export default Expand;