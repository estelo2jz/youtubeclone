import React from "react";
import { Link } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';

const HistoryForm = () => {
  return (

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
    
  );
};

export default HistoryForm;
