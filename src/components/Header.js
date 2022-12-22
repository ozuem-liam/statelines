import React from "react";

import logo from "../assets/stateline-logo.svg";

const Header = () => {
  return (
    <>
      <nav className="bg-green pt-16 pb-4 px-4">
        <div>
          <img src={logo} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Header;
