import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Subs from './components/Subs';
import Library from './components/Library';
import LikedVideos from './components/LikedVideos';
import Trending from './components/Trending';
import WatchLater from './components/WatchLater';
import YourVideos from './components/YourVideos';
import History from './components/History';

function App() {
  return (
    <div className="App">
    {/* Router is whats in charge of determining what url loads what components,
     EX were in a Homepage, and what components should we show the Hompoge component or the search page component  */}
      <Router>
        <Header />
      {/* to determine the components we use a Switch */}
        <Switch>
          <Route exact path="/Trending">
            <div className="app__page">
              <Sidebar />
              <Trending />
            </div>
          </Route>
          <Route exact path="/Subs">
            <div className="app__page">
              <Sidebar />
              <Subs />
            </div>
          </Route>
          <Route exact path="/Library">
            <div className="app__page">
              <Sidebar />
              <Library />
            </div>
          </Route>
          <Route exact path="/YourVideos">
            <div className="app__page">
              <Sidebar />
              <YourVideos />
            </div>
          </Route>
          <Route exact path="/WatchLater">
            <div className="app__page">
              <Sidebar />
              <WatchLater />
            </div>
          </Route>
          <Route exact path="/LikedVideos">
            <div className="app__page">
              <Sidebar />
              <LikedVideos />
            </div>
          </Route>
          <Route exact path="/History">
            <div className="app__page">
              <Sidebar />
              <History />
            </div>
          </Route>
          <Route exact path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
