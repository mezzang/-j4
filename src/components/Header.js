import React from "react";

const Header = () => {
  return (
    <header className="text-center mb-6">
      <div className="flex justify-center items-center gap-4">
        <img src="/path-to-logo.png" alt="Logo" className="w-16 h-16" />
        <div>
          <h1 className="text-yellow-500 text-4xl font-bold">Seminar.zip</h1>
          <p className="text-red-400 font-light">for knu_it students</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
