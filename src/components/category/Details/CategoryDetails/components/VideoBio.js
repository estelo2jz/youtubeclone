import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { HomeDataContext } from '../../CategoryInventory/HomeInventory';
import { Link } from 'react-router-dom'

import Comments from './Comments';

import SearchIcon from '@material-ui/icons/Search';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { RiShareForwardLine, RiPlayListAddFill } from 'react-icons/ri';
import { HiScissors } from 'react-icons/hi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';

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
            <div className="video-bio__container">
              <div className="video-bio__top">
                <p className="video-bio__top-heading">
                  <span>
                    {product.title}
                  </span>
                </p>
                <div className="video-bio__views">
                  <p className="">
                    <span>
                      {product.views} views
                    </span>
                  </p>
                  <p className="">
                    <span>
                      {product.actualDate}
                    </span>
                  </p>
                  <p className="">
                    <span>
                      {product.timestamp}
                    </span>
                  </p>
                </div>
              </div>
              <div className="video-bio__links">
                <p className="">
                  <span>
                    <FiThumbsUp />
                  </span>
                  <span>
                    {product.thumbsUp}
                  </span>
                </p>
                <p className="">
                  <span>
                    <FiThumbsDown />
                  </span>
                  <span>
                    {product.thumbsDown}
                  </span>
                </p>
                <p className="">
                  <span>
                    <RiShareForwardLine />
                  </span>
                </p>
                <p className="">
                  <span>
                    <RiPlayListAddFill />
                  </span>
                </p>
                <p className="">
                  <span>
                    <BiDotsHorizontalRounded />
                  </span>
                </p>
              </div>
              <div className="video-bio__bottom">
                {/* <p className="viode-bio__bottom-header">
                  <span>
                    {product.image}
                  </span>
                </p> */}
                <div className="video-bio__channel">
                  <p className="viode-bio__">
                    <span>
                      {product.channel}
                    </span>
                  </p>
                  <p className="">
                    <span>
                      {product.icon}
                    </span>
                  </p>
                </div>
                <div className="video-bio__subscribe">
                  <p className="viode-bio__">
                    <span>
                      SUBSCRIBED
                    </span>
                  </p>
                  <p className="">
                    <span>
                      <FaRegBell />
                    </span>
                  </p>
                </div>
              </div>
              <div className="video-bio__bottom-desc">
                <p className="video-bio__desc">
                  <span>
                    {product.desc}
                  </span>
                </p>
              </div>
            </div>
            <div className="video-bio__show-more"><p>SHOW MORE</p></div>
          </div>
        ))
      }
      <Comments />
    </>
  )
}