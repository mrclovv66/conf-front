// SummaryPage.js
import React from "react";
import "./Summary.css";
import CheckboxOption from "./CheckboxOption";

import Choose__item from "./choose-module__item";
import RadioOption from "./RadioOption";
import img from "./door.png";
import img1 from "./Group.svg";
import img2 from "./arrow.svg";
import YourComponent from "./list-options";

import { Link } from "react-router-dom";

function SummaryPage() {
  return (
    <div className="container">
      <div className="options__wrapper">
        <div className="option-left">
          <img src={img} alt="" />
        </div>
        <div className="option-right__wrapper">
          <div className="option-right">
            <div className="choose__item">
              <Choose__item></Choose__item>
            </div>
            <YourComponent />
            <div className="option-2">
              <p className="option-p">Опция 2</p>
              <div className="choose-option">
                <RadioOption id="1" label="Option 1" />
                <RadioOption id="2" label="Option 2" />
                <RadioOption id="3" label="Option 3" />
                <RadioOption id="4" label="Option 4" />
                <RadioOption id="5" label="Option 5" />
              </div>
            </div>
            <div className="option-3">
              <p className="option-p">Опция 3</p>
              <div>
                <CheckboxOption label="2100*1000*24" />
                <CheckboxOption label="2100*1000*24" />
                <CheckboxOption label="2100*1000*24" />
                <CheckboxOption label="2100*1000*24" />
              </div>
            </div>
          </div>
          <footer>
            <div className="mainfooter">
              <Link to="/">
                <button className="back__btn">
                  <div className="footer-btn__div">
                    <span>
                      <img src={img2} alt="" className="arrow" />
                    </span>
                    <span id="back-btn__item">Назад</span>
                  </div>
                </button>
              </Link>
              <Link to="/cart">
                <button className="footer__btn1">
                  <div className="footer-btn__div">
                    <span id="zakaz">34 500₽ Оформить</span>
                    <span>
                      <img src={img1} alt="" className="cart" />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
