import { useSelector } from "react-redux";
import CategoryFilter from "../catagory-filter/CategoryFilter";
import Header from "./header/Header";
import LatestNews from "./latestPost/LatestPost";

const Layout = ({ children }) => {
    // Extract relevant state from the Redux store
    const { articles} = useSelector(state => state.news);

    /**
     * Function to shuffle the articles array.
     * This function creates a mutable copy of the input array and performs the Fisher-Yates shuffle.
     *
     * @param {Array} articles - The array of articles to shuffle
     * @return {Array} - The shuffled array
     */
    function shuffleArray(articles) {
        // Create a mutable copy of the array
        const mutableArray = [...articles];

        // Fisher-Yates shuffle algorithm
        for (let i = mutableArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mutableArray[i], mutableArray[j]] = [mutableArray[j], mutableArray[i]];
        }

        return mutableArray;
    }

    return (
        <>
            {/* Render the header component */}
            <Header />

            {/* Render the category filter component */}
            <CategoryFilter />

            <div className="container-fluid">
                <div className="row">
                    {/* Main content area */}
                    <div className="col-md-8">
                        {children}
                    </div>

                    {/* Sidebar for latest posts */}
                    <div className="col-md-4">
                        <h4>Latest Posts</h4>
                        {
                            // Shuffle the articles array and render each article in the LatestNews component
                            shuffleArray(articles).map((article, index) => (
                                <LatestNews key={index} article={article} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
