import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css';

const NewsCard = ({ article }) => {
    return (
        <div className={`card ${styles.custom_card}`} style={{ width: "22rem" }}>
            {/* Display the article's image */}
            <img src={article.urlToImage} className="card-img-top" alt={article.title} />
            
            <div className="card-body">
                {/* Display the article's title */}
                <h5 className="card-title">{article.title}</h5>
                
                {/* Display a brief excerpt of the article */}
                <p className="card-text">{article.content}</p>
                
                {/* Link to the detailed view of the article */}
                <Link to={`/article/${encodeURIComponent(article.url)}`} className="btn btn-secondary">
                    Read more
                </Link>
            </div>
        </div>
    );
}

export default NewsCard;
