import React, { useState, useEffect } from "react";
import "./navigation.css";

//MUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navigation() {
  return (
    <div className="nav_main">
      <img
        className="logo"
        src="https://framerusercontent.com/images/aAfoRwcu4gjKqQXYPejA7Pn3lYY.png"
      ></img>

      <div className="nav_selections">
        <div className="nav_select">For Loan Officers</div>
        <div className="nav_select nav_select_w_dropdown">
          <div className="">Mortgage Products</div>
          <svg
            t="1708657150455"
            className="icon_dr"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1448"
            width="20"
            height="20"
          >
            <path
              d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667"
              fill="#919EAD"
              p-id="1449"
            ></path>
          </svg>
          <div className="nav_dropdown">
            <div className="nav_dropdown_each easyApply_butt">
              Easy Apply
              <svg
                t="1708672225770"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2526"
                width="20"
                height="20"
              >
                <path
                  d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333z"
                  fill="#696CFF"
                  p-id="2527"
                ></path>
              </svg>
            </div>

            <div className="nav_dropdown_each">Why Restate</div>
            <div className="nav_dropdown_each">Purchase</div>
            <div className="nav_dropdown_each">Refinance</div>
            <div className="nav_dropdown_each">Home Equitys</div>
            <div className="nav_dropdown_each">HELOC</div>
          </div>
        </div>
        <div className="nav_select nav_select_w_dropdown">
          <a>Resources</a>
          <svg
            t="1708657150455"
            class="icon_dr"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1448"
            width="20"
            height="20"
          >
            <path
              d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667"
              fill="#919EAD"
              p-id="1449"
            ></path>
          </svg>
          <div className="nav_dropdown">
            <div className="nav_dropdown_each">Blog</div>
            <div className="nav_dropdown_each">About Us</div>
          </div>
        </div>
      </div>
      <div className="nav_buttons">
        {/* <button className="rachel_Buttn">Talk to Rachel</button> */}
        <button href="#" class="rachel_Buttn animated-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Talk to Rachel
        </button>

        <button className="apply_Buttn">Apply Now</button>
      </div>
    </div>
  );
}
