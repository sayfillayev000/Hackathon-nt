import React from "react";
import { Rectangle14 } from "../../../assets/images";
import { NaqshBottom, NaqshRight, NaqshTop } from "../../../assets/icons";
import './hero.scss'

const index = () => {
  return (
    <>
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
    </>
  );
};

export default index;
