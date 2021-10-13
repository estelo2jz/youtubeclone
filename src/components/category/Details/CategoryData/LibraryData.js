import React, { useContext } from "react";
import { LibraryDataContext } from "../CategoryInventory/LibraryInventory";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SettingsIcon from "@material-ui/icons/Settings";

import Avatar from "@material-ui/core/Avatar";

import LibraryAccount from './components/LibraryAccount';


import "./styles/librarydata.scss";

export default function LibraryData() {
  const value = useContext(LibraryDataContext);
  const [products] = value.products;

  return (
    <div className="">
    <LibraryAccount />
      <div className="library-data__container">
        {products.map((product) => (
          <div className="library-data" key={product._id}>
            <Link
              to={`/home/${product._id}`}
              className="library-data__flex-helper"
            >
              <div className="library-data__thumbnail">
                <img src={product.image} alt="" />
              </div>
              <div className="library-data__info">
                <div>
                  <Avatar
                    className="library-data__avatar"
                    alt={product.channel}
                    src={product.channelImage}
                  />
                </div>
                <div className="library-data__text">
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
