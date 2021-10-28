import React, { useContext } from "react";
import { TrendingDataContext } from "../CategoryInventory/TrendingInventory";
import { Link } from "react-router-dom";

import TrendingHeader from './components/TrendingHeader';

import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";

import "./styles/trendingdata.scss";

export default function TrendingData() {
  const value = useContext(TrendingDataContext);
  const [products] = value.products;

  return (
    <div className="">
    <div>
      <TrendingHeader />
    </div>
      <div className="trending-data__container">
        {products.map((product) => (
          <div className="trending-data" key={product._id}>
            <Link
              to={`/trending/${product._id}`}
              className="trending-data__flex-helper"
            >
              <div className="trending-data__thumbnail">
                <img src={product.image} alt="" />
              </div>
              <div className="trending-data__info">
                <div>
                  <Avatar
                    className="trending-data__avatar"
                    alt={product.channel}
                    src={product.channelImage}
                  />
                </div>
                <div className="trending-data__text">
                  <h4>{product.title}</h4>
                  <p>{product.channel}</p>
                  <p>
                    {product.views} views &middot; {product.timestamp} days ago
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
