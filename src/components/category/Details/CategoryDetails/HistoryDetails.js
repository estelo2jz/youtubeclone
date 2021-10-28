import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {HistoryDataContext} from '../CategoryInventory/HistoryInventory';
import { Link } from 'react-router-dom'

import VideoBio from './components/VideoComponents/Bio/HistoryBio';
import RecommendVideos from './components/RecommendVideos';

import SearchIcon from '@material-ui/icons/Search';


import './styles/main.scss';

export default function HistoryDetails() {
  const { id } = useParams();
  const value = useContext(HistoryDataContext)
  const [products] = value.products

  const details = products.filter((product, index) => {
    return product._id === id
  })

  return (
    <>
      {
        details.map(product => (
          <div className="details" key={product._id}>
            <div className="box-details">
              <div className="box-img">
                <div className="box-img-container">
                  <video loop controls autoPlay={true} muted >
                   <source src={product.video} type="video/mp4"/>
                  </video>
                </div>
                <div className="box-img-info">
                  <div className="box-img-info-contents">
                    <VideoBio />
                  </div>
                </div>
              </div>
              <div className="box-specs-container">
                <div className="more-videos__container">
                  <RecommendVideos />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}