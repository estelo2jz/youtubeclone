import React from "react";
import "../styles/Home.scss";
import HomeData from "../components/category/Details/CategoryData/HomeData";
import PopularTopic from "./PopularTopic";

import "./styles/PopularTopic.scss";

function Home() {
  return (
    <div className="home__container">
      <div className="home__heading">
        <div>
          <PopularTopic />
        </div>
      </div>
      <div className="home__ads-container">
        <div className="home__ads-left">
          <img src="https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1310/3/1313782.jpeg" alt="" />
        </div>
        <div className="home__ads-right">
          <div className="home__ads-top-img">
            <img
              src="https://blog.logomyway.com/wp-content/uploads/2021/01/fortnite-logo-1024x324.jpg"
              alt=""
            />
          </div>
          <div className="home__ads-main">
            <div className="home__ads-main-top">
              <img
                src="https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/35257.png"
                alt=""
              />
            </div>
            <div className="home__ads-main-bottom">
              <p>Fortnite Balenciaga Event</p>
              <div className="home__ads-main-contents">
                <div className="home__ads-main-contents-1">
                  <button>Ad</button>
                  <p>Fortnite</p>
                </div>
                <div className="home__ads-main-contents-2">
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__box">
        <HomeData />
      </div>
    </div>
  );
}

export default Home;
