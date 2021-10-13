import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { HistoryDataContext } from "../CategoryInventory/HistoryInventory";
// import DescThumb from '../../DescThumb';
// import MaintenanceThumb from '../../MaintenanceThumb';
// import ToBeImportedThumb from '../../ToBeImportedThumb';


import "./styles/main.scss";

const HomeTab = () => {
  const { id } = useParams();
  const value = useContext(HistoryDataContext);
  const [products] = value.products;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  return (
    <>
      {details.map((product) => (
        <div className="details-tab__container">
          <div className="tabs-template__outer-container">
            <div className="tabs-template__specs">
              <div className="tabs-template__specs-engine">
                <p>ENGINE</p>
                <div className="tabs-template__specs-engine-container">
                  <div className="tabs-template__specs-engine-children">
                    <span>ENGINE TYPE</span>
                    <span>{product.title}</span>
                  </div>
                  <div className="tabs-template__specs-engine-children">
                    <span>ENGINE SIZE</span>
                    <span>{product.channel}</span>
                  </div>
                  <div className="tabs-template__specs-engine-children">
                    <span>FUEL SPECIFICATION</span>
                    <span>{product.views}</span>
                  </div>
                </div>
              </div>
              <div className="tabs-template__specs-body">
                <p>BODY</p>
                <div className="tabs-template__specs-engine-container">
                  <div className="tabs-template__specs-engine-children">
                    <span>BODY COLOR</span>
                    <span>{product.timestamp}</span>
                  </div>
                  <div className="tabs-template__specs-engine-children">
                    <span>BODY STYLE</span>
                    <span>{product.icon}</span>
                  </div>
                  <div className="tabs-template__specs-engine-children">
                    <span>DOORS</span>
                    <span>{product.filter}</span>
                  </div>
                  <div className="tabs-template__specs-engine-children">
                    <span>PAINT TYPE</span>
                    <span>{product.desc}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeTab;
