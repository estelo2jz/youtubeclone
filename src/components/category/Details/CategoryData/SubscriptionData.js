import React, { useContext } from "react";
import { SubscriptionDataContext } from "../CategoryInventory/SubscriptionInventory";
import { Link } from "react-router-dom";

import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';

import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SettingsIcon from "@material-ui/icons/Settings";

import Avatar from "@material-ui/core/Avatar";

import "./styles/subscriptiondata.scss";

export default function SubscriptionData() {
  const value = useContext(SubscriptionDataContext);
  const [products] = value.products;

  return (
    <div className="">
    <div className="subscription__top-header">
      <div className="subscription__left">
        <p>Today</p>
      </div>
      <div className="subscription__right">
        <p>MANAGE</p>
        <div className="subscription__right-bars">
          <span><BsFillGrid3X2GapFill /></span>
          <span><AiOutlineUnorderedList /></span>          
        </div>
      </div>
    </div>
      <div className="subscription-data__container">
        {products.map((product) => (
          <div className="subscription-data" key={product._id}>
            <Link
              to={`/subscription/${product._id}`}
              className="subscription-data__flex-helper"
            >
              <div className="subscription-data__thumbnail">
                <img src={product.image} alt="" />
              </div>
              <div className="subscription-data__info">
                <div>
                  <Avatar
                    className="subscription-data__avatar"
                    alt={product.channel}
                    src={product.channelImage}
                  />
                </div>
                <div className="subscription-data__text">
                  <h4>{product.title}</h4>
                  <p>{product.channel}</p>
                  <p>
                    {product.views} &middot; {product.timestamp}
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
