import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, fetchNewsData } from '../../store/newsSlice';

// Define the available categories for filtering news articles
const categories = ['business', 'technology', 'sports', 'health'];

const CategoryFilter = () => {
    // Initialize Redux dispatch function to send actions
    const dispatch = useDispatch();

    // Access the current category from the Redux store
    const category = useSelector((state) => state.news.category);

    // Function to handle the category change
    const handleCategoryChange = (newCategory) => {
      

        // Dispatch action to update the category in the Redux store
        dispatch(setCategory(newCategory));

        // Dispatch action to fetch news data for the new category
        dispatch(fetchNewsData({ page: 1, category: newCategory }));
    };

    // Function to handle the Home button click
    const handleHomeClick = () => {
        const defaultCategory = 'tesla';

        // Dispatch action to reset the category to the default ('tesla')
        dispatch(setCategory(defaultCategory));

        // Dispatch action to fetch news data for the default category
        dispatch(fetchNewsData({ page: 1, category: defaultCategory }));
    };

    return (
        <div className="container-fluid my-3">
            <div className="row justify-content-center">
                <div className="btn-group py-3" role="group" aria-label="Category filter">
                    {/* Home button */}
                    <button
                        className={`btn py-3 btn-${category === 'tesla' ? 'primary' : 'secondary'}`}
                        onClick={handleHomeClick}
                    >
                        Home
                    </button>

                    {/* Dynamically create buttons for each category */}
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={`btn py-3 btn-${cat === category ? 'primary' : 'secondary'}`}
                            onClick={() => handleCategoryChange(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;
