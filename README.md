# Getting Started with Create React App

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
    git clone <repository-url>

2. **Install dependencies:**
    npm install

## Project Structure

The project's directory structure is as follows:
 
 ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## State Management

This project uses Redux for state management. The relevant files are located in the `src/store/` directory:

- **store.js**: Configures the Redux store.
- **newsSlice.js**: Contains the news slice for managing articles, categories, and other news-related states.

## Components

The project is divided into several components, located in the `src/components/` directory:

- **CategoryFilter**: Allows users to filter news by category.
- **Header**: The header component of the application.
- **LatestPost**: Displays the latest news posts.
- **ArticleDetail**: Shows detailed information about a specific article.
- **Layout**: The main layout component that includes the header, category filter, and main content area.

## API Integration

The project integrates with the News API to fetch news articles. The API key and endpoint are configured in the `newsSlice.js` file:

```javascript
const API_KEY = 'your_api_key';
const API_URL = `https://newsapi.org/v2/everything`;

npm run build
