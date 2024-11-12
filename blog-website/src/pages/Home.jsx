import { useMemo} from 'react';
import './pages.css';
import useArticles from './useArticles';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const articles = useArticles();
    const navigate = useNavigate();

    const memoArticle = useMemo(() => articles, [articles]);

    const handleExpand = (article) => {
        navigate('/expand', { state: { article } }); 
    };

    return (
        <div>
            <div className="grid-container">
                {memoArticle.length > 0 ? (
                    memoArticle.map((article, index) => (
                        <div
                            key={index}
                            className="post"
                            onClick={() => handleExpand(article)}
                        >
                            {article.image && (
                                <img src={article.image} alt="Thumbnail" className="thumbnail" />
                            )}
                            <h3>{article.title}</h3>
                        </div>
                    ))
                ) : (
                    <p>No articles available</p>
                )}
            </div>
        </div>
    );
};

export default Home;
