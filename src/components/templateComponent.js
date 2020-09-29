import React, { Component } from "react";
import ReactDOM from "react-dom";

const Template = ({ card: { id, image, price, title, tags, description } }) => {
  return (
      <>
    <div className="challenges__card">
      <div className="challenges__card--price">{price}</div>
      <div className="challenges__card--img">
        <img src={image} alt={title} />
      </div>
      <div className="challenges__content">
        <div className="challenges__top">
          <h2 className="challenges__heading">
            <span className="challenges__heading--primary">{title}</span>
          </h2>
          <div className="challenges__tags">
            {tags
              ? tags.map(tag => <span className="challenges__tag">{tag}</span>)
              : ""}
          </div>
        </div>
        <div className="challenges__bottom">
          <p className="challenges__desc">{description}</p>
          <button
            type="button"
            className="cta download"
            data-toggle="modal"
          >
            View Challenge
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Template;
