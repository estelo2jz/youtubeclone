import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './categoryStyles/Subs.scss';
import { SubsData } from './categodyData/SubsDataContext';
import Avatar from "@material-ui/core/Avatar"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Subs() {
  return (
    <div className="subs__container">
      <div className="subs_heading">
        <p>Today</p>
      </div>
      <div  className="sub-video__container">
        <div className="subs__videos">
          {SubsData.map((item, index) => {
            return (
              <div key={index} className="subs-card__container">
                <Link to={item.path} >
                  <div className="subs-card__thumbnail">
                    <div className="subs-card__img">
                      <img src={item.image}  alt="video-thumbnail" />
                    </div>
                  </div>
                  <div className="subs-card__desc"> 
                    <div className="subs-card__info">
                      <p>{item.title}</p> 
                    </div>
                    <div className="subs-card__text">
                      <span>
                        <p>{item.channel}</p> 
                        <p className="subs-card__icon">{item.icon}</p>
                      </span>
                      <p>
                        {item.views + item.maxViews  +' ' + "views"} &middot; {item.timestamp + ' ' + item.filter + ' ' + "ago"}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Subs
