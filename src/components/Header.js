import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/statelines-logo.svg";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log({ currentPath });
  return (
    <>
      <nav className="flex justify-between bg-green px-4 pb-4 pt-16">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          {currentPath === "/" ? (
            <Link to="/help">
              <h6 className="text-white font-sans font-semibold cursor-pointer">Questionnaire</h6>
            </Link>
          ) : currentPath === "/userQuestionaire" ? (
            <h6 className="text-white font-sans font-semibold">Sender Questionnaire</h6>
          ) : currentPath === "/courierQuestionaire" ? (
            <h6 className="text-white font-sans font-semibold">Community Courier Questionnaire</h6>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
