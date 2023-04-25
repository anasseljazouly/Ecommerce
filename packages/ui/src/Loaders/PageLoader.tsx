import React from "react";
import "./pageLoader.css";

export const PageLoader = () => {
  return (
    <>
      <div className="top-main-panel">
        <div className="basic-loader-card loader-card-column">
          <div className="animated-background"></div>
          <div className="loading loader-row"></div>
          <div className="loading loader-row"></div>
          <div className="loading loader-row"></div>
          <div className="loading loader-row"></div>
          <div className="loading loader-row"></div>
        </div>
      </div>
      <div className="bottom-main-panel">
        <div className="basic-loader-card loader-card-column">
          <div className="animated-background"></div>
          <div className="loader-header-container">
            <div className="loading loading-header"></div>
            <div className="loading loading-header"></div>
            <div className="loading loading-header"></div>
            <div className="loading loading-header"></div>
            <div className="loading loading-header"></div>
          </div>
          <div className="loader-column-container">
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
          </div>
          <div className="loader-column-container">
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
          </div>
          <div className="loader-column-container">
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
          </div>
          <div className="loader-column-container">
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
            <div className="loading loading-column"></div>
          </div>
        </div>
      </div>
    </>
  );
};
