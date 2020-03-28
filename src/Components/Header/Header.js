import React, {useState} from 'react';
import {Burger} from "../Burger/Burger";
import {NavLink, BrowserRouter} from 'react-router-dom';
import '../Header/style.css';

export const Hdr = () => {

  const [showBurger, setShowBurger] = useState(false);

  return (
      <header className={"header"}>
        <div className={"container"}>
          <div className={"header__body"}>
            <div className={"header__logo"}>
            </div>
            <div className={ showBurger ? `header__burger active` : "header__burger"}>

              <Burger burgerMenu={()=> setShowBurger( (prevState => !prevState))}/>
            </div>
          </div>
        </div>
      </header>
  )
}