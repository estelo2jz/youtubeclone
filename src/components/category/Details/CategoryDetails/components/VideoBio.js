import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {HomeDataContext} from '../../CategoryInventory/HomeInventory';
import { Link } from 'react-router-dom'


import SearchIcon from '@material-ui/icons/Search';


import './styles/videoBio.scss';

export default function VideoBio() {
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
          <div className="video-bio" key={product._id}>
            <div className="">
              <div className="r">
                <p className="">
                  <span></span>
                  <span>
                    {product.title}
                  </span>
                </p>
                <p className="">
                  <span></span>
                  <span>
                    {product.channel}
                  </span>
                </p>
                {/* <p className="">
                  <span></span>
                  <span>
                    {product.channelImage}
                  </span>
                </p> */}
                <p className="">
                  <span></span>
                  <span>
                    {product.views}
                  </span>
                </p>
                <p className="">
                  <span></span>
                  <span>
                    {product.timestamp}
                  </span>
                </p>
                <p className="">
                  <span></span>
                  <span>
                    {product.icon}
                  </span>
                </p>
                <p className="">
                  <span></span>
                  <span>
                    {product.filter}
                  </span>
                </p>
                <p className="">
                  <span></span>
                  <span>
                    {product.desc}
                  </span>
                </p>
                <p className="">
                  <span></span>
                  <span>
                    {product.mazViews}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}