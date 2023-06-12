import React from "react";

const CourierQuestions = ({
  listLocation,
  listLocationHandler,
  checked,
  weight,
  weightChangeHandler,
  plans,
  plansChangeHandler,
  pickupAndDropoff,
  pickupAndDropoffChangeHandler,
  enteredAddress,
  addressChangeHandler,
  enteredCompensation,
  compensationChangeHandler
}) => {
  return (
    <>
      {/* question 6 */}
      <li className="mb-6">
        <p className="text-green">CommenList Most Travelled to Locations.</p>
        <label>
          Can you list the locations you travel to the most and provide an
          estimate of how often you travel to such locations?
        </label>
        <textarea
          value={listLocation}
          onChange={listLocationHandler}
          className="form-control text-gray-700 border-gray-300 mt-8 block h-40 w-full rounded border
           border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal outline-none"
        />
      </li>

      {/* question 7 */}
      <li className="mb-6">
        <p className="mb-2 font-medium text-green">
          Willingness to Participate
        </p>{" "}
        <p className="mb-4 font-medium">
          Given you’ve indicated an interest in becoming a Community Courier,
          how willing might you be to carry any of the following types of
          packages?
        </p>{" "}
        <div className="flex gap-4">
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              weight === "mini" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="mini"
              type="radio"
              name="weight"
              value="mini"
              onChange={weightChangeHandler}
              checked={weight === "mini"}
            />
            <span className="pr-4 font-medium text-black">
              Mini package” (weight under or below 0.5KG)
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              weight === "small" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="small"
              type="radio"
              name="weight"
              value="small"
              onChange={weightChangeHandler}
              checked={weight === "small"}
            />
            <span className="pr-4 font-medium text-black">
              “Small package” (0.5KG to 2KG OR 4.5 in x 8.5 in x 6 in)
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              weight === "large" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="large"
              type="radio"
              name="weight"
              value="large"
              onChange={weightChangeHandler}
              checked={weight === "large"}
            />
            <span className="pr-4 font-medium text-black">
              “Large package” (over 5KG OR larger than medium size); 5. “All of
              the above”
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              weight === "medium" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="medium"
              type="radio"
              name="weight"
              value="medium"
              onChange={weightChangeHandler}
              checked={weight === "medium"}
            />
            <span className="pr-4 font-medium text-black">
              “Medium package” (2KG to 5KG OR 5 in x 6 in x 10.5 in);
            </span>{" "}
          </label>
        </div>
      </li>

      {/* question 8 */}
      <li className=" mb-6">
        <p className="mb-2 font-medium text-green">-Providing Travel Plans?</p>{" "}
        <p className="mb-4 font-medium">
          Given you’ve indicated an interest in becoming a Community Courier,
          will you be willing to provide us with information ahead of your
          proposed trip that can be used to schedule you trip with a package
          pick up?
        </p>{" "}
        <div className="flex flex-wrap gap-4">
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              plans === "yes" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="plans"
              type="radio"
              name="plans"
              value="yes"
              onChange={plansChangeHandler}
              checked={plans === "yes"}
            />
            <span className="pr-4 font-medium text-black">YES</span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              plans === "no" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="plans"
              type="radio"
              name="plans"
              value="no"
              onChange={plansChangeHandler}
              checked={plans === "no"}
            />
            <span className="pr-4 font-medium text-black">NO</span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              plans === "think about it" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="plans"
              type="radio"
              name="plans"
              value="think about it"
              onChange={plansChangeHandler}
              checked={plans === "think about it"}
            />
            <span className="pr-4 font-medium text-black">
              I need to think about it
            </span>{" "}
          </label>
        </div>
      </li>

      {/* question 9 */}
      <li className=" mb-6">
        <p className="mb-2 font-medium text-green">- Pick-up & Drop-off</p>{" "}
        <p className="mb-4 font-medium">
          Statelines intends on operating a pick up and drop off processing
          centre for Community Couriers based in Lagos or "name of any other
          locations" at the following locations - location 1, "name of place";
          and, location 2 "name of place". Are you happy to travel to and from
          this location to pick up and drop off an item that you’ve picked up?
        </p>{" "}
        <div className="flex flex-wrap gap-4">
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              pickupAndDropoff === "yes" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="low"
              type="radio"
              name="pickupAndDropoff"
              value="yes"
              onChange={pickupAndDropoffChangeHandler}
              checked={pickupAndDropoff === "yes"}
            />
            <span className="pr-4 font-medium text-black">YES</span>{" "}
          </label>
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              pickupAndDropoff === "no" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="low"
              type="radio"
              name="pickupAndDropoff"
              value="no"
              onChange={pickupAndDropoffChangeHandler}
              checked={pickupAndDropoff === "no"}
            />
            <span className="pr-4 font-medium text-black">NO</span>{" "}
          </label>
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              pickupAndDropoff === "need" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="low"
              type="radio"
              name="pickupAndDropoff"
              value="need"
              onChange={pickupAndDropoffChangeHandler}
              checked={pickupAndDropoff === "need"}
            />
            <span className="pr-4 font-medium text-black">
              “I would need travel compensation to pick up or drop off, as the
              location is far from where I will start my journey”
            </span>{" "}
          </label>
        </div>
      </li>

      {/* question 10 */}
      <li className="mb-6">
        <p className="mb-2 font-medium text-green">Where Your Journey Begins</p>
        <p className="mb-4 font-medium">
          Can you kindly provide us with the address from where you plan to
          begin your journey?
        </p>
        <input
          type="address"
          label="Enter your address"
          placeholder="Enter your address"
          value={enteredAddress}
          required
          onChange={addressChangeHandler}
          className="color-white w-full rounded-lg bg-black px-4 py-2 text-center text-white outline-none lg:w-2/4"
        />
      </li>

      {/* question 11 */}
      <li className="mb-6">
        <p className="mb-2 font-medium text-green">Fair Compensation.</p>
        <p className="mb-4 font-medium">
          Can you kindly provide us with your opinion of what you regard as a
          fair compensation for your time, to pick up and drop off items as a
          Community Courier?
        </p>
        <input
          type="compensation"
          label="Compensation"
          placeholder="Enter expected compensation amount"
          value={enteredCompensation}
          required
          onChange={compensationChangeHandler}
          className="color-white w-full rounded-lg bg-black px-4 py-2 text-center text-white outline-none lg:w-2/4"
        />
      </li>
    </>
  );
};

export default CourierQuestions;
