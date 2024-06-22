import { Link } from 'react-router-dom';
import styles from './LatestPost.module.css';

const LatestNews = ({ article }) => {
    return (
        <div className={`card ${styles.latest_news}`}>
            <div>
                {/* Display the article's image */}
                <img src={article.urlToImage} height={"90px"} width={"180px"} alt="Article image" />
            </div>

            <div className="card-body">
                {/* Link to the detailed view of the article */}
                <Link to={`/article/${encodeURIComponent(article.url)}`}>
                    {/* Display the article's title with hover effect */}
                    <h6 className={styles.hover}>{article.title}</h6>
                </Link>
            </div>
        </div>
    );
};

export default LatestNews;
