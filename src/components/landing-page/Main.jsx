import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewsData, setPage } from '../../store/newsSlice';
import styles from './main.module.css';
import NewsCard from '../news-card/NewsCard';

const Main = () => {
    // Get the dispatch function from Redux to dispatch actions
    const dispatch = useDispatch();
    
    // Select parts of the state from the Redux store
    const { articles, status, error, page, totalResults, category } = useSelector(resp => resp.news);

    // useEffect to fetch news data whenever the page or category changes
    useEffect(() => {
        if (page && category) {
            dispatch(fetchNewsData({ page, category }));
        }
    }, [dispatch, page, category]);

    // Handler to go to the next page of news
    const handleNextPage = () => {
        if (page * 10 < totalResults) {
            dispatch(setPage(page + 1));
        }
    };

    // Handler to go to the previous page of news
    const handlePreviousPage = () => {
        if (page > 1) {
            dispatch(setPage(page - 1));
        }
    };

    // Display loading message if the data is being fetched
    if (status === 'loading') return <p>Loading...</p>;

    // Display error message if there was an error fetching data
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <>
            <div className="row">
                {
                    // Map through articles and render a NewsCard for each article
                    articles.map((article, index) => (
                        <div className="col-md-6" key={index}>
                            <NewsCard article={article} />
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-evenly container mb-5">
                {/* Previous page button, disabled if on the first page */}
                <button disabled={page === 1}> 
                    <h3 className={styles.page_navigation} onClick={handlePreviousPage}>PREV</h3>
                </button>
                {/* Display current page number */}
                <h3>{page}</h3>
                {/* Next page button, disabled if there are no more pages */}
                <button disabled={(page * 10) >= totalResults}>
                    <h3 className={styles.page_navigation} onClick={handleNextPage}>NEXT</h3>
                </button>
            </div>
        </>
    )
}

export default Main;
