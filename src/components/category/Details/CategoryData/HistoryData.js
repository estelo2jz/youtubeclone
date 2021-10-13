import React, { useContext } from "react";
import { HistoryDataContext } from "../CategoryInventory/HistoryInventory";
import { Link } from "react-router-dom";

import HistoryForm from '../CategoryTab/HistoryForm';

import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';

import "./styles/main.scss";

export default function HistoryData() {
  const value = useContext(HistoryDataContext);
  const [products] = value.products;

  return (
    <div className="history__container">
    <div className="history__right-outer">
      <div className="history__right-container">
        <div className="wrapper">
          <div id="one">
            <div className="history__type-container">
              <div className="history__search">
                <div>
                  <SearchIcon />
                </div>
                <div className="history__input">
                  <input placeholder="Search watch history" />
                </div>
              </div>
              <div className="history__history-header">
                <p>History type</p>
              </div>
              <div className="history__input-container">
                <div className="history__watch-history-container">
                  <div>
                    <p>Watch history</p>
                  </div>
                  <div>
                    <input type="radio" checked="checked" checked />
                  </div>
                </div>
                <div className="history__community-container">
                  <div>
                    <p>Community</p>
                  </div>
                  <div>
                    <input type="radio" checked="" unchecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="two">
            <div className="history__bottom-container">
              <div className="history__delete-container">
                <icon>
                  <DeleteIcon />
                </icon>
                <p>clear all watch history</p>
              </div>
              <div className="history__pause-container">
                <icon>
                  <PauseCircleOutlineIcon />
                </icon>
                <p>pause all history</p>
              </div>
              <div className="history__manage-container">
                <icon>
                  <SettingsIcon />
                </icon>
                <p>manage all history</p>
              </div>
              <div className="history__link-one">
                <Link to="#">Watch and search history</Link>
              </div>
              <div className="history__link-two">
                <Link to="#">Comments</Link>
              </div>
              <div className="history__link-three">
                <Link to="#">Live Chat</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="history__left-outer">
      <div className="history__left-outer-header">
        <p>Watch history</p>
        <p>Today</p>
      </div>
      <div className="history__videos-container">
        <div className="history__videos">
          {products.map((product) => (
            <div className="history-card__container" key={product._id}>
              <Link to={`/history/${product._id}`} className="history-card__flex-helper">
                <div className="history-card__thumbnail">
                {/* <img src={product.images[0]} alt="" /> */}
                <img src={product.image} alt="" />
                </div>
                <div className="history-card__desc">
                  <div className="history-card__info">
                    <p>{product.title}</p>
                  </div>
                  <div className="history-card__text">
                    <span>
                      <p>{product.channel}</p>
                      <p className="history-card__icon">{product.icon}</p>
                    </span>
                    <p>
                      <p>{product.views + product.maxViews + " " + "views"}</p>
                    </p>
                  </div>
                  <div className="history-card__main-desc">
                    <p>{product.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
