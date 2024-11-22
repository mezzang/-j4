// components/Header.js
import React from "react";

function Header() {
  return (
    <div className="title">
      <img className="image" src="image.png" alt="Logo" />
      <div className="overlap-group">
        <div className="text-wrapper-24">Seminar.zip</div>
        <div className="KNU-MARK">
          <div className="text-wrapper-25">KNU</div>
        </div>
      </div>
      <div className="text-wrapper-26">for knu_it students</div>
    </div>
  );
}

export default Header;
