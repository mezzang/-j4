// KNU_SEMINAR/src/components/Header.js
import React from "react";
import hobanu from "../assets/images/호반우.png";
import "./style.css";

const Header = () => {
    return (
        <div className="header">
            <img className="header-image" alt="호반우" src={hobanu} />

            <div className="header-content">
                <div className="header-title">Seminar.zip</div>

                <div className="header-logo">
                    <div className="header-logo-text">KNU</div>
                </div>
            </div>

            <div className="header-subtitle">for knu_it students</div>
        </div>
    );
};

export default Header;
