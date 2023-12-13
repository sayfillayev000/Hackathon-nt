import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PersonImg, Rectangle14 } from "../../../assets/images";
import "./header.scss";
import {
  DropDownIcon,
  NaqshBottom,
  NaqshRight,
  NaqshTop,
} from "../../../assets/icons";

const index = () => {
  return (
    <header className="container header__container">
      <div className="header">
        <Link className="header__left">Badiiyat</Link>
        <ul className="nav__right">
          <li>
            <NavLink to='/'>Bosh sahifa</NavLink>
          </li>
          <li>
            <NavLink to='/book'>Kitoblar</NavLink>
          </li>
          <li className="person__img">
            <img src={PersonImg} alt="PersonImg" />
            <DropDownIcon />
          </li>
        </ul>
      </div>
      <div
        style={{ backgroundImage: `url(${Rectangle14})` }}
        className="header__bottom"
      >
        <NaqshTop className="n__top" />
        <NaqshRight className="n__ringht" />
        <NaqshBottom className="n__bottom" />
      </div>
      <div className="header__search">
        <div className="search__item">
          <label htmlFor="search">
            <span>Qidirish</span>
            <div className="input__box">
              <input
                type="search"
                id="search"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />
              <button>Izlash</button>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default index;
