import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PersonImg, Rectangle14 } from "../../../assets/images";
import "./header.scss";
import {
  DropDownIcon,
  NaqshBottom,
  NaqshRight,
  NaqshTop,
} from "../../../assets/icons";
import { Hero } from "..";

const index = () => {
  const [profile, setProfile] = useState(false)
  return (
    <header className="container header__container">
      <div className="header container">
        <Link to='/' className="header__left">Badiiyat</Link>
        <ul className="nav__right">
          <li>
            <NavLink to='/'>Bosh sahifa</NavLink>
          </li>
          <li>
            <NavLink to='/book'>Kitoblar</NavLink>
          </li>
          <li className="person__img" onClick={() =>setProfile(!profile)}>
            <img src={PersonImg} alt="PersonImg" />
            <DropDownIcon />
          </li>
        </ul>
      </div>
      <div style={profile ? {display:"block"}:{display:"none"}} className="hendle__profile" >
      <h3>Profil</h3>
      <h3>Aftor qo'shish</h3>
      <h3>Kitob qo'shish</h3>
      <h3>Chiqish</h3>
      </div>
   
    </header>
  );
};

export default index;
