import React from "react";
import Header from "../../components/Header";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <video className="h-50 m-auto w-9/12 py-8" height="400px" controls>
        <source src="/video/statelines.mp4" type="video/mp4" />
        </video>

        <section className="flex bg-green px-10 pt-6 pb-24 lg:px-60 lg:pt-32 ">
          <div>
            <h2 className="text-2xl font-medium text-white lg:text-4xl">
              Want to help make the product perfect?
            </h2>
            <h2 className="text-2xl font-medium text-white lg:text-4xl">
              {" "}
              Answer this
              <br /> <span className="text-black">questionnaire</span>
            </h2>
            <Link to="/userQuestionaire">
              <button className="mt-6 rounded-3xl bg-white py-2 px-5 font-medium lg:text-2xl">
                Start here
              </button>
            </Link>
          </div>
          <div>
            <img src={phone} alt="" className="lg:w-full" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
