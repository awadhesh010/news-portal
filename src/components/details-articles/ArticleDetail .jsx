import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsData, setCategory } from '../../store/newsSlice';


const ArticleDetail = () => {
    // Extract the `id` parameter from the URL
    const { id } = useParams();

    // Initialize Redux dispatch function to send actions
    const dispatch = useDispatch();

    // Access the articles array from the Redux store
    const articles = useSelector((state) => state.news.articles);

    // Find the article based on the URL encoded `id`
    const article = articles.find((article) => article.url === decodeURIComponent(id));

    // Initialize the navigate function to programmatically navigate to different routes
    const navigate = useNavigate();

    // useEffect hook to fetch news data if the articles array is empty
    useEffect(() => {
        if (!articles.length) {
            dispatch(fetchNewsData({ page: 1, category: 'tesla' })); // Ensure fetchNewsData has correct parameters
        }
    }, [dispatch, articles.length]);

    // Function to handle the Home button click
    const handleHome = () => {
        const homeCategory = 'tesla';

        // Dispatch action to reset the category to the default ('tesla')
        dispatch(setCategory(homeCategory));

        // Dispatch action to fetch news data for the default category
        dispatch(fetchNewsData({ page: 1, category: homeCategory }));

        // Navigate to the home route
        navigate('/');
    };

    // If the article is not found, render a message and a button to go back to home
    if (!article) {
        return (
            <div>
                <p>Article not found</p>
                <button className='btn btn-secondary' onClick={handleHome}>Go to Home</button>
            </div>
        );
    }

    // Render the article details
    return (
        <div className="container">
            <h2>{article.title}</h2>
            <br />
            <h5>{article.description}</h5>
            <hr />
            <p>
                Edited By : {article.author ? article.author : 'Unknown author'}</p>
            <hr />
            <div>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="img-fluid" />}
            </div>

            <div className='mt-5'>
                <p>
                    {article.content}
                </p>

                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read original article
                </a>
            </div>
        </div>
    )
}
export default ArticleDetail;


