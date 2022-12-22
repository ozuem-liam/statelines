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
            <div className="mb-4 h-64 w-80 min-w-full bg-green bg-send-receive bg-center bg-no-repeat lg:h-[60vh]">
              <h2 className="relative top-[40%] m-auto block w-max text-3xl font-medium text-white">
                Send or
                <br />
                <span>Receive</span>
              </h2>
            </div>
          </Link>

          <Link to="/courierQuestionaire">
            {" "}
            <div className="mb-4 h-64 w-80 min-w-full bg-green bg-business-man bg-center bg-no-repeat lg:h-[60vh]">
              <h2 className="relative top-[40%] m-auto block w-max text-3xl font-medium text-white">
                community
                <br />
                <span>Courier</span>
              </h2>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Help;
