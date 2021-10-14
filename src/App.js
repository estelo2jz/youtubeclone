import "./App.css";
import Header from "./Header";
import Home from "./components/Home";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/pages/SearchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subs from "./components/category/Subs";
import Library from "./components/category/Library";
import LikedVideos from "./components/category/LikedVideos";
import Trending from "./components/category/Trending";
import WatchLater from "./components/category/WatchLater";
import YourVideos from "./components/category/YourVideos";
import History from "./components/category/History";
import NavBar from "./components/NavBar";

// Data
import HistoryData from "./components/category/Details/CategoryData/HistoryData";
import HomeData from "./components/category/Details/CategoryData/HomeData";
import TrendingData from "./components/category/Details/CategoryData/TrendingData";
import LibraryData from "./components/category/Details/CategoryData/LibraryData";
import SubscriptionData from "./components/category/Details/CategoryData/SubscriptionData";

// DataProvider
import { HistoryDataProvider } from "./components/category/Details/CategoryInventory/HistoryInventory";
import { HomeDataProvider } from "./components/category/Details/CategoryInventory/HomeInventory";
import { TrendingDataProvider } from "./components/category/Details/CategoryInventory/TrendingInventory";
import { LibraryDataProvider } from "./components/category/Details/CategoryInventory/LibraryInventory";
import { SubscriptionDataProvider } from "./components/category/Details/CategoryInventory/SubscriptionInventory";

// Details
import HistoryDetails from "./components/category/Details/CategoryDetails/HistoryDetails";
import HomeDetails from "./components/category/Details/CategoryDetails/HomeDetails";
import TrendingDetails from "./components/category/Details/CategoryDetails/TrendingDetails";
import LibraryDetails from "./components/category/Details/CategoryDetails/LibraryDetails";
import SubscriptionDetails from "./components/category/Details/CategoryDetails/SubscriptionDetails";

// import { ShowmoreMain, OptionOne, OptionTwo, OptionThree } from './components/pages/Reports';
import { ShowmoreMain } from "./components/pages/Reports";
import OptionOne from "./components/pages/options/OptionOne";
import OptionTwo from "./components/pages/options/OptionTwo";
import OptionThree from "./components/pages/options/OptionThree";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <HomeDataProvider>
      <TrendingDataProvider>
        <SubscriptionDataProvider>
          <LibraryDataProvider>
            <HistoryDataProvider>
              <div className="App">
                {/* Router is whats in charge of determining what url loads what components,
            EX were in a Homepage, and what components should we show the Hompoge component or the search page component  */}
                <Router>
                  <Sidebar />
                  <Switch>
                    <Route path="/showmore" exact component={ShowmoreMain} />
                    <Route path="/showmore/save1" exact component={OptionOne} />
                    <Route path="/showmore/save2" exact component={OptionTwo} />
                    <Route
                      path="/showmore/save3"
                      exact
                      component={OptionThree}
                    />
                    <Route path="/" exact component={Home} />
                    <Route path="/home/:id" exact component={HomeDetails} />

                  <Route path="/trending" exact component={TrendingData} />
                  <Route path="/trending/:id" exact component={TrendingDetails} />

                  <Route path="/subscription" exact component={SubscriptionData} />
                  <Route path="/subscription/:id" exact component={SubscriptionDetails} />

                  <Route path="/library" exact component={LibraryData} />
                  <Route path="/library/:id" exact component={LibraryDetails} />

                  <Route path="/yourvideos" exact component={YourVideos} />
                  <Route path="/watchlater" exact component={WatchLater} />
                  <Route path="/likedvideos" exact component={LikedVideos} />

                    <Route path="/history" exact component={HistoryData} />
                    <Route
                      path="/history/:id"
                      exact
                      component={HistoryDetails}
                    />

                    <Route
                      path="/search/:searchTerm"
                      exact
                      component={SearchPage}
                    />
                  </Switch>
                </Router>
              </div>
            </HistoryDataProvider>
          </LibraryDataProvider>
        </SubscriptionDataProvider>
      </TrendingDataProvider>
    </HomeDataProvider>
  );
}

export default App;
