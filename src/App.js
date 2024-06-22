import Main from "./components/landing-page/Main";
import { Provider } from 'react-redux';
import { store } from "./store/store";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetail from "./components/details-articles/ArticleDetail ";
import Layout from "./components/layout";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/" element={<Layout><Main /></Layout>} />
            <Route path="/article/:id" element={<Layout><ArticleDetail /></Layout>} />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
