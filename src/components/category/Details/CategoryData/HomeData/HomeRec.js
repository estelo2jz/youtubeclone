import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { HomeDataContext } from "../../CategoryInventory/HomeInventory";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SettingsIcon from "@material-ui/icons/Settings";

import PopularTags from './PopularTags';

// import PopularTopic from "../../../PopularTopic";

import Avatar from "@material-ui/core/Avatar";

import "./styles/HomeRec.scss";

export default function HomeData() {
  const value = useContext(HomeDataContext);
  const [products] = value.products;

  return (
    <div className="">
      <div className="home-reac__popular-tags">
       <PopularTags tag="All" componentLink="/" />
       <PopularTags tag="Anime" componentLink="/" />
       <PopularTags tag="Watched" componentLink="/" />
       <PopularTags tag="RecentlyUploaded" componentLink="/" />
       <PopularTags tag="Related" componentLink="/" />
       <PopularTags tag="Subscriptions" componentLink="/" />
       <PopularTags tag="Hot" componentLink="/" />
       <PopularTags tag="News" componentLink="/" />
       <PopularTags tag="Trending" componentLink="/" />
       <PopularTags tag="Music" componentLink="/" />
       <PopularTags tag="Media" componentLink="/" />
       <PopularTags tag="Related" componentLink="/" />

      </div>
      <div className="home-rec__container">
        {products.map((product) => (
          <div className="home-rec" key={product._id}>
            <Link
              to={`/home/${product._id}`}
              className="home-rec__flex-helper"
            >
              <div className="home-rec__thumbnail">
                <img src={product.image} alt="" />
              </div>
              <div className="home-rec__info">
                <div className="home-rec__text">
                  <h4>{product.title}</h4>
                  <p>{product.channel}</p>
                  <p>
                    {product.views} views &middot; {product.timestamp}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
