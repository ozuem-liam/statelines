import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { toast } from "react-toastify";

const CourierQuestionaire = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [comment, setComment] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [scale, setScale] = useState("");
  const [received, setReceived] = useState("");
  const [sealed, setSealed] = useState("");
  const [liability, setLiability] = useState("");
  const [travelPoint, setTravelPoint] = useState("");
  const [price, setPrice] = useState("");
  const [screening, setScreening] = useState("");
  const [damage, setDamage] = useState("");

  const checked = "bg-green text-white";

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const commentHandler = (event) => {
    setComment(event.target.value);
  };

  const damageChangeHandler = (event) => {
    setDamage(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };

  const incomeChangeHandler = (event) => {
    setIncome(event.target.value);
  };

  const liabilityChangeHandler = (event) => {
    setLiability(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const receiveChangeHandler = (event) => {
    setReceived(event.target.value);
  };

  const screeningChangeHandler = (event) => {
    setScreening(event.target.value);
  };

  const sealedChangeHandler = (event) => {
    setSealed(event.target.value);
  };

  const scaleChangeHandler = (event) => {
    setScale(event.target.value);
  };

  const travelPointChangeHandler = (event) => {
    setTravelPoint(event.target.value);
  };

  const submitHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await fetch(
        "https://smithswork-sl-v1-api.onrender.com/api/community/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            gender: gender,
            income: income,
            age: age,
            travel_frequency: scale,
            q1: received,
            q2: sealed,
            q3: liability,
            q4: travelPoint,
            q5: price,
            notes: comment,
          }),
        }
      );
      if (!response.ok) {
        setLoading(false);
        toast.error("Something went wwrong!");
        throw new Error("couldn't fetch data");
      }
      setLoading(false);
      toast.success("Your answers have been successfully recorded 😄!");
      navigate("/Thankyou");
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <form onSubmit={submitHandler} className="px-12 py-6   pb-12 lg:px-60">
        <div>
          <p className="mb-2 font-medium text-green">Email (optional)</p>
          <p className="mb-4 font-medium">
            If you input your email, we will let you know when our product is
            ready and you may also contacted for our app testing.
          </p>
          <input
            type="email"
            label="Email Address"
            placeholder="enter your gmail"
            value={enteredEmail}
            required
            onChange={emailChangeHandler}
            className="color-white w-full rounded-lg bg-black px-4 py-2 text-center text-white outline-none lg:w-2/4"
          />
        </div>

        <ol className="list-decimal  py-6">
          {/* question 1 */}
          <li className="mb-6 text-green">
            <p className="mb-2 text-green">What’s your gender?</p>{" "}
            <div className="flex gap-4">
              <label
                className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
                  gender === "male" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={genderChangeHandler}
                  checked={gender === "male"}
                />
                <span className="pr-4 font-medium text-black">Male</span>{" "}
              </label>
              <label
                className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
                  gender === "female" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={genderChangeHandler}
                  checked={gender === "female"}
                />
                <span className="pr-4 font-medium text-black">Female</span>
              </label>
            </div>
          </li>

          {/* question 2 */}
          <li className=" mb-6 text-green">
            <p className="mb-2 text-green">Age Range?</p>{" "}
            <div className="flex flex-wrap gap-4">
              <label
                className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
                  age === "19-24" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="YA"
                  type="radio"
                  name="age"
                  value="19-24"
                  onChange={ageChangeHandler}
                  checked={age === "19-24"}
                />
                <span className="pr-4 font-medium text-black">19 -24</span>{" "}
              </label>
              <label
                className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
                  age === "25-44" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="MA"
                  type="radio"
                  name="age"
                  value="25-44"
                  onChange={ageChangeHandler}
                  checked={age === "25-44"}
                />
                <span className="pr-4 font-medium text-black">25-44</span>
              </label>
              <label
                className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                  age === "45 Above" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="OA"
                  type="radio"
                  name="age"
                  value="45 Above"
                  onChange={ageChangeHandler}
                  checked={age === "45 Above"}
                />
                <span className="pr-4 font-medium text-black">45 above</span>
              </label>
            </div>
          </li>

          {/* question 3 */}
          <li className=" mb-6 text-green">
            <p className="mb-2 text-green">Age Range?</p>{" "}
            <div className="flex flex-wrap gap-4">
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
                  income === "below 1 million" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="low"
                  type="radio"
                  name="income"
                  value="below 1 million"
                  onChange={incomeChangeHandler}
                  checked={income === "below 1 million"}
                />
                <span className="pr-4 font-medium text-black">
                  below 1 million
                </span>{" "}
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
                  income === "Above 1.5 Million" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="average"
                  type="radio"
                  name="income"
                  value="Above 1.5 Million"
                  onChange={incomeChangeHandler}
                  checked={income === "Above 1.5 Million"}
                />
                <span className="pr-4 font-medium text-black">
                  above 1.5 million
                </span>
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
                  income === "Above 2.5 Million" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="high"
                  type="radio"
                  name="income"
                  value="Above 2.5 Million"
                  onChange={incomeChangeHandler}
                  checked={income === "Above 2.5 Million"}
                />
                <span className="pr-4 font-medium text-black">
                  above 2.5 million
                </span>
              </label>
            </div>
          </li>

          {/* question 4 */}
          <li className=" mb-6 text-green">
            <p className="mb-2 text-green">
              How often do you travel interstate on a scale of 1-5?
            </p>{" "}
            <div className="flex gap-4">
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "one" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="scale"
                  value="one"
                  onChange={scaleChangeHandler}
                  checked={scale === "one"}
                />
                <span className="pr-4 font-medium text-black">1</span>{" "}
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "two" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="scale"
                  value="two"
                  onChange={scaleChangeHandler}
                  checked={scale === "two"}
                />
                <span className="pr-4 font-medium text-black">2</span>
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "three" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="scale"
                  value="three"
                  onChange={scaleChangeHandler}
                  checked={scale === "three"}
                />
                <span className="pr-4 font-medium text-black">3</span>
              </label>

              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "four" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="OA"
                  type="radio"
                  name="scale"
                  value="four"
                  onChange={scaleChangeHandler}
                  checked={scale === "four"}
                />
                <span className="pr-4 font-medium text-black">4</span>
              </label>

              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "five" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  id="OA"
                  type="radio"
                  name="scale"
                  value="five"
                  onChange={scaleChangeHandler}
                  checked={scale === "five"}
                />
                <span className="pr-4 font-medium text-black">5</span>
              </label>
            </div>
          </li>

          {/* questino 5 */}
          <li className="mb-6 text-green">
            <p className="mb-2 ">
              Would you send your package through a courier service under the
              following conditions?
            </p>
            <ul className="list-disc text-black">
              <li className="mb-4">
                <p className="mb-2 font-medium text-black">
                  Package is received at either a collection center or picked up
                  at you house.
                </p>
                <div className="flex gap-4">
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      received === "yes" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="received"
                      value="yes"
                      onChange={receiveChangeHandler}
                      checked={received === "yes"}
                    />
                    <span className="pr-4 font-medium text-black">Yes</span>{" "}
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      received === "no" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="received"
                      value="no"
                      onChange={receiveChangeHandler}
                      checked={received === "no"}
                    />
                    <span className="pr-4 font-medium text-black">No</span>
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      received === "maybe" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="received"
                      value="maybe"
                      onChange={receiveChangeHandler}
                      checked={received === "maybe"}
                    />
                    <span className="pr-4 font-medium text-black">Maybe</span>
                  </label>
                </div>
              </li>

              <li className="mb-4">
                <p className="mb-2 font-medium text-black">
                  Package must be opened for security screening and sealed
                  afterwards by the service.
                </p>
                <div className="flex gap-4">
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      sealed === "yes" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="sealed"
                      value="yes"
                      onChange={sealedChangeHandler}
                      checked={sealed === "yes"}
                    />
                    <span className="pr-4 font-medium text-black">Yes</span>{" "}
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      sealed === "no" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="sealed"
                      value="no"
                      onChange={sealedChangeHandler}
                      checked={sealed === "no"}
                    />
                    <span className="pr-4 font-medium text-black">No</span>
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      sealed === "maybe" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="sealed"
                      value="maybe"
                      onChange={sealedChangeHandler}
                      checked={sealed === "maybe"}
                    />
                    <span className="pr-4 font-medium text-black">Maybe</span>
                  </label>
                </div>
              </li>

              <li className="mb-4">
                <p className="mb-2 font-medium text-black">
                  Package is subject to standard insurance and included in
                  pricing.
                </p>
                <div className="flex gap-4">
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      liability === "yes" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="liability"
                      value="yes"
                      onChange={liabilityChangeHandler}
                      checked={liability === "yes"}
                    />
                    <span className="pr-4 font-medium text-black">Yes</span>{" "}
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      liability === "no" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="liability"
                      value="no"
                      onChange={liabilityChangeHandler}
                      checked={liability === "no"}
                    />
                    <span className="pr-4 font-medium text-black">No</span>
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      liability === "maybe" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="liability"
                      value="maybe"
                      onChange={liabilityChangeHandler}
                      checked={liability === "maybe"}
                    />
                    <span className="pr-4 font-medium text-black">Maybe</span>
                  </label>
                </div>
              </li>

              <li className="mb-4">
                <p className="mb-2 font-medium text-black">
                  Package also has the option of special insurance to cover
                  packages of significant worth.
                </p>
                <div className="flex gap-4">
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      travelPoint === "yes" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="travelPoint"
                      value="yes"
                      onChange={travelPointChangeHandler}
                      checked={travelPoint === "yes"}
                    />
                    <span className="pr-4 font-medium text-black">Yes</span>{" "}
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      travelPoint === "no" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="travelPoint"
                      value="no"
                      onChange={travelPointChangeHandler}
                      checked={travelPoint === "no"}
                    />
                    <span className="pr-4 font-medium text-black">No</span>
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      travelPoint === "maybe" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="travelPoint"
                      value="maybe"
                      onChange={travelPointChangeHandler}
                      checked={travelPoint === "maybe"}
                    />
                    <span className="pr-4 font-medium text-black">Maybe</span>
                  </label>
                </div>
              </li>

              <li className="mb-4">
                <p className="mb-2 font-medium text-black">
                  Package is sent through Community Couriers who are registered
                  individuals who travel regularly by road, rail and air across
                  states in Nigeria. Community Couriers are subjected to
                  screening that includes identity checks, guarantors, and
                  location per time.
                </p>
                <div className="flex gap-4">
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      price === "yes" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="price"
                      value="yes"
                      onChange={priceChangeHandler}
                      checked={price === "yes"}
                    />
                    <span className="pr-4 font-medium text-black">Yes</span>{" "}
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      price === "no" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="price"
                      value="no"
                      onChange={priceChangeHandler}
                      checked={price === "no"}
                    />
                    <span className="pr-4 font-medium text-black">No</span>
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      price === "maybe" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="price"
                      value="maybe"
                      onChange={priceChangeHandler}
                      checked={price === "maybe"}
                    />
                    <span className="pr-4 font-medium text-black">Maybe</span>
                  </label>
                </div>
              </li>

              <li className="mb-4">
                <p className="mb-2 font-medium text-black">
                  Package fees are slightly above what is offered by the
                  traditional motor parks for inter-state delivery.
                </p>
                <div className="flex gap-4">
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      damage === "yes" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="damage"
                      value="yes"
                      onChange={damageChangeHandler}
                      checked={damage === "yes"}
                    />
                    <span className="pr-4 font-medium text-black">Yes</span>{" "}
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      damage === "no" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="damage"
                      value="no"
                      onChange={damageChangeHandler}
                      checked={damage === "no"}
                    />
                    <span className="pr-4 font-medium text-black">No</span>
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      damage === "maybe" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="damage"
                      value="maybe"
                      onChange={damageChangeHandler}
                      checked={damage === "maybe"}
                    />
                    <span className="pr-4 font-medium text-black">Maybe</span>
                  </label>
                </div>
              </li>

              <li className="mb-4">
                <p className="mb-2 font-medium text-black">
                  Packages can be tracked via your mobile applications.
                </p>
                <div className="flex gap-4">
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      screening === "yes" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="screening"
                      value="yes"
                      onChange={screeningChangeHandler}
                      checked={screening === "yes"}
                    />
                    <span className="pr-4 font-medium text-black">Yes</span>{" "}
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      screening === "no" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="screening"
                      value="no"
                      onChange={screeningChangeHandler}
                      checked={screening === "no"}
                    />
                    <span className="pr-4 font-medium text-black">No</span>
                  </label>
                  <label
                    className={` space-x-1 rounded-2xl border-2 border-solid border-black px-2 px-1 ${
                      screening === "maybe" && checked
                    }`}
                  >
                    <input
                      className={`opacity-0`}
                      required
                      type="radio"
                      name="screening"
                      value="maybe"
                      onChange={screeningChangeHandler}
                      checked={screening === "maybe"}
                    />
                    <span className="pr-4 font-medium text-black">Maybe</span>
                  </label>
                </div>
              </li>
            </ul>
          </li>
        </ol>

        <div>
          <p className="text-green">Comments</p>
          <label>Do you have anything to share</label>
          <textarea
            value={comment}
            onChange={commentHandler}
            className="form-control text-gray-700 border-gray-300 mt-8 block h-40 w-full rounded border
           border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal outline-none"
          />
        </div>

        <button
          // disabled={!formIsValid}
          className="mt-8 rounded-3xl bg-green py-2 px-6 font-medium text-white"
        >
                    {loading === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 50 50"
              className="animate-spin"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
                stroke="#000000"
                opacity="0.2"
              />
            </svg>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
};

export default CourierQuestionaire;
