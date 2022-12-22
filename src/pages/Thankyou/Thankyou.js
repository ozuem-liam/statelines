import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Thankyou = () => {
  return (
    <>
      <Header />
      <div className="m-auto w-52 pt-16 text-center">
        <h2 className="text-lg font-medium">Thankyou for your time</h2>

        <Link to="/">
          <button className="mt-8 rounded-3xl bg-green py-2 px-6 font-medium text-white">
            Go Back Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
