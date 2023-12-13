import React from "react";
import "./aftirCard.scss";

const index = ({ className, img, title, subTitle }) => {
  return (
    <div className={`${className} card__item`}>
      <img src={img} alt="" />
      <div className="card__bottom">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default index;
