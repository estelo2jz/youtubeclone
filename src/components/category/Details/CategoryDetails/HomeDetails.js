import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {HomeDataContext} from '../CategoryInventory/HomeInventory';
import { Link } from 'react-router-dom'

// import DetailsThumb from '../../DetailsThumb';
// import JapanContacts from './DetailsContacts/JapanContacts';

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
            {/* <div className="details__header">
              <div className="details-header__fullname">
                <p>{product.title}</p>
              </div>
              <div className="details__price">
                <h3>{product.title}</h3>
              </div>
            </div> */}
            <div className="box-details">
              <div className="box-img">
                <div className="box-img-container">
                  <video loop controls autoPlay={true} muted >
                   <source src={product.video} type="video/mp4"/>
                  </video>
                </div>
                {/* <div className="box-img-container" 
                  style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
                /> */}
                {/* <div>
                  <DetailsThumb images={product.images} setIndex={setIndex} />
                </div> */}
              </div>
              <div className="box-specs-container">
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.title}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.channel}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.channelImage}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.views}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.timestamp}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.icon}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.filter}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.desc}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span></span>
                  <span>
                    {product.mazViews}
                  </span>
                </p>
              </div>
            </div>
            {/* <JapanContacts />
            <HeaderInventory /> */}
          </div>
        ))
      }
    </>
  )
}