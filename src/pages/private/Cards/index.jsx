import React from "react";
import "./cards.scss";
import { NavLink } from "react-router-dom";

import { avloniy } from "../../../assets/images";
import { AftirCard, Hero } from "..";

const index = () => {
  return (
    <div className="category container">
      <Hero />
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
          id={`/1`}
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          id={`/2`}
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          id={`/3`}
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          id={`/4`}
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          id={`/5`}
          className={""}
          title="Abdulla Avloniy"
          subTitle="1878-1934"
          img={avloniy}
        />
        <AftirCard
          id={`/6`}
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
