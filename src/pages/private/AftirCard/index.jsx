import React from "react";
import "./aftirCard.scss";
import { Link } from "react-router-dom";

const index = ({ className, img, title, subTitle,id }) => {
  return (
    <Link to={id}>
      <div className={`${className} card__item`}>
        <img src={img} alt="" />
        <div className="card__bottom">
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default index;
