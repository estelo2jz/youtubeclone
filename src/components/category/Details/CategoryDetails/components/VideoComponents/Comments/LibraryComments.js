import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { LibraryDataContext } from "../../../../CategoryInventory/LibraryInventory";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { RiShareForwardLine, RiPlayListAddFill } from "react-icons/ri";
import { HiScissors } from "react-icons/hi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { MdSort } from "react-icons/md";

import DetailsComments from "../DetailsComments/LibraryDetailsComment";

import "../../styles/comments.scss";

export default function Comments() {
  const { id } = useParams();
  const value = useContext(LibraryDataContext);
  const [products] = value.products;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  return (
    <>
      {details.map((product) => (
        <div className="comments" key={product._id}>
          <div className="comments__container">
            <div className="comments__quantity">
              <div className="comments__qty">
                <p>{product.commentQuantity} Comments</p>
              </div>
              <div className="comments__sort">
                <p>
                  <MdSort />
                </p>
                <p>
                  SORT BY
                </p>
              </div>
            </div>
            <div className="comments__input-container">
              <div className="comments__img">
                <img src={product.channelImage} alt="" />
              </div>
              <div className="comments__input">
                <input type="text" placeholder="Add a public comment...." />
              </div>
            </div>
          </div>
          <div className="comments__items-section">
            <DetailsComments
              className="comments__items"
              comments={product.comments}
              setIndex={setIndex}
            />
          </div>
        </div>
      ))}
    </>
  );
}
