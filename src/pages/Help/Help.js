import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Help = () => {
  return (
    <>
      <Header />
      <section className="lg:px-60">
        <p className="py-8 px-5 text-sm">What would you like to help with?</p>
        <div className="flex flex-col lg:flex-1 lg:flex-row lg:justify-between lg:gap-6">
          <Link to="/userQuestionaire">
            <div className="mb-4 h-64 w-80 min-w-full bg-green bg-send-receive bg-center bg-no-repeat lg:h-[60vh] relative">
              <h2 className="relative top-[40%] m-auto block w-max text-3xl text-center  font-medium text-white z-20">
                Send or
                <br />
                <span>Receive</span>
              </h2>
            <div className="absolute top-0 left-0 bg-[#22B573] z-10 h-full w-full opacity-50"></div>
            </div>
          </Link>

          <Link to="/courierQuestionaire">
            {" "}
            <div className="mb-4 h-64 w-80 min-w-full bg-green bg-business-man bg-center bg-no-repeat lg:h-[60vh] relative">
              <h2 className="relative top-[40%] m-auto block w-max text-3xl text-center font-medium text-white z-20">
                Community
                <br />
                <span>Courier</span>
              </h2>
              <div className="absolute top-0 left-0 bg-[#22B573] z-10 h-full w-full opacity-50"></div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Help;
