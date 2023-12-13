import React from "react";
import "./cards.scss";
import { NavLink } from "react-router-dom";

import { avloniy } from "../../../assets/images";
import { AftirCard } from "..";

const index = () => {
  return (
    <div className="category container">
      <h1 className="category__title">Asosiy kategoriyalar</h1>
      <ul className="category__navbar">
        <li>
          <NavLink>Temuriylar davri </NavLink>
        </li>
        <li>
          <NavLink>Jadid adabiyoti </NavLink>
        </li>
        <li>
          <NavLink>Sovet davri </NavLink>
        </li>
        <li>
          <NavLink>Mustaqillik davri </NavLink>
        </li>
      </ul>
      <div className="card__container">
        <AftirCard
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        /> 
        <AftirCard
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        /> 
        <AftirCard
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
      </div>
    </div>
  );
};

export default index;
