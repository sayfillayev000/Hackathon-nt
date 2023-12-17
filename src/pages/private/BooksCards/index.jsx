import React from "react";
import "./booksCards.scss";
import { NavLink } from "react-router-dom";

import { book } from "../../../assets/images";
import { BookCard, Hero } from "..";

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
        <BookCard
          id={`/book/1`}
          className={""}
          title="Dunyoning ishlari"
          subTitle="O'tkir Hoshimov"
          img={book}
        />
        <BookCard
          id={`/book/2`}
          className={""}
          title="Dunyoning ishlari"
          subTitle="O'tkir Hoshimov"
          img={book}
        />
        <BookCard
          id={`/book/${3}`}
          className={""}
          title="Dunyoning ishlari"
          subTitle="O'tkir Hoshimov"
          img={book}
        />
        <BookCard
          id={`/book/4`}
          className={""}
          title="Dunyoning ishlari"
          subTitle="O'tkir Hoshimov"
          img={book}
        />
        <BookCard
          id={`/book/5`}
          className={""}
          title="Dunyoning ishlari"
          subTitle="O'tkir Hoshimov"
          img={book}
        />
        <BookCard
          id={`/book/6`}
          className={""}
          title="Dunyoning ishlari"
          subTitle="O'tkir Hoshimov"
          img={book}
        />
      </div>
    </div>
  );
};

export default index;
