import React from "react";

import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";

import "../../styles/detailsComment.scss";

export default function DetailsComments({ comments, setIndex }) {
  return (
    <div className="details-comments">
      <div className="details-comments__container">
        {comments.map((item, index) => (
          <div className="details-comments__inner">
            <div className="details-comments__comment-number">
              <div className="details-comments__number">
                <p>{item.commentsNumber}</p>
              </div>
            </div>
            <div className="details-comments__section">
              <div className="details-comments__top-section">
                <div className="details-comments__img">
                  <img src={item.imgChannel} alt="" />
                </div>
                <div className="details-comments__profile">
                  <div className="details-comments__user">
                    <p>{item.user}</p>
                    <p>{item.date}</p>
                  </div>
                  <div className="details-comments__commented">
                    <p>{item.comments}</p>
                  </div>
                  <div className="details-comments__thumbs">
                    <div className="details-comments__thumbs-up">
                      <FiThumbsUp />
                      <p>{item.thumbsUp}</p>
                    </div>
                    <div className="details-comments__thumbs-down">
                      <FiThumbsDown />
                      <p>{item.thumbsDown}</p>
                    </div>
                    <div className="details-comments__thumbs-reply">
                      <p>REPLY</p>
                    </div>
                  </div>
                  <div className="details-comments__replies">
                    <p>
                      <AiFillCaretDown />
                    </p>
                    <p>View {item.replies} replies</p>
                  </div>
                </div>
              </div>
              <div className="details-comments__bottom-section"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
