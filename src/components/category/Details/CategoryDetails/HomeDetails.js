import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {HomeDataContext} from '../CategoryInventory/HomeInventory';
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';

import VideoBio from './components/VideoBio';
import RecommendVideos from './components/RecommendVideos';

import SearchIcon from '@material-ui/icons/Search';


import './styles/main.scss';
// import HeaderInventory from '../../Home/HeaderInventory';

export default function HomeDetails() {
  const { id } = useParams();
  const value = useContext(HomeDataContext)
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
                   <ReactPlayer onEnded={true} width="100%" height="500px" controls="true" playing='true' url={product.video} />
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