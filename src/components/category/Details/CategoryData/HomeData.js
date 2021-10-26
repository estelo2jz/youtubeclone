import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { HomeDataContext } from "../CategoryInventory/HomeInventory";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SettingsIcon from "@material-ui/icons/Settings";

import PopularTopic from "../../../PopularTopic";

import Avatar from "@material-ui/core/Avatar";

import "./styles/homedata.scss";

export default function HomeData() {
  const value = useContext(HomeDataContext);
  const [products] = value.products;

  return (
    <div className="">
      <div className="home-data__container">
        {products.map((product) => (
          <div className="home-data" key={product._id}>
            <Link
              to={`/home/${product._id}`}
              className="home-data__flex-helper"
            >
              <div className="home-data__thumbnail">
                <img src={product.image} alt="" />
              </div>
              <div className="home-data__info">
                <div>
                  <Avatar
                    className="home-data__avatar"
                    alt={product.channel}
                    src={product.channelImage}
                  />
                </div>
                <div className="home-data__text">
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
