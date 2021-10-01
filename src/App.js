import './App.css';
import Header from './Header';
import Home from './components/Home';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/pages/SearchPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Subs from './components/category/Subs';
import Library from './components/category/Library';
import LikedVideos from './components/category/LikedVideos';
import Trending from './components/category/Trending';
import WatchLater from './components/category/WatchLater';
import YourVideos from './components/category/YourVideos';
import History from './components/category/History';
import NavBar from './components/NavBar';

// import { ShowmoreMain, OptionOne, OptionTwo, OptionThree } from './components/pages/Reports';
import { ShowmoreMain } from './components/pages/Reports';
import OptionOne from './components/pages/options/OptionOne';
import OptionTwo from './components/pages/options/OptionTwo';
import OptionThree from './components/pages/options/OptionThree';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
    {/* Router is whats in charge of determining what url loads what components,
     EX were in a Homepage, and what components should we show the Hompoge component or the search page component  */}
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/showmore' exact component={ShowmoreMain} />
          <Route path='/showmore/save1' exact component={OptionOne} />
          <Route path='/showmore/save2' exact component={OptionTwo} />
          <Route path='/showmore/save3' exact component={OptionThree} />
          <Route exact path="/"  component={Home}>
          </Route>
          <Route exact path="/trending"  component={Trending}>
          </Route>
          <Route path="/subs"  component={Subs}>
          </Route>
          <Route path="/library"  component={Library}>
          </Route>
          <Route path="/yourvideos"  component={YourVideos}>
          </Route>
          <Route path="/watchlater"  component={WatchLater}>
          </Route>
          <Route path="/likedvideos"  component={LikedVideos}>
          </Route>
          <Route path="/history"  component={History}>
          </Route>
          <Route path="/search/:searchTerm"  component={SearchPage}>
          </Route>
          {/* <Route exact path="/Trending">
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
          </Route> */}
        </Switch>
      </Router>


    </div>
  );
}

export default App;
