import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {HomeDataContext} from '../CategoryInventory/HomeInventory';
import { Link } from 'react-router-dom'

import VideoBio from './components/VideoBio';
import RecommendVideos from './components/RecommendVideos';

import SearchIcon from '@material-ui/icons/Search';


import './styles/main.scss';
// import HeaderInventory from '../../Home/HeaderInventory';

export default function HomeDetails() {
  const { id } = useParams();
  const value = useContext(HomeDataContext)
  const [products] = value.products

  const [index, setIndex] = useState(0)
  const imgDiv = useRef();


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