import React from "react";

const UserQuestions = ({
  packageSize,
  packageSizeChangeHandler,
  checked,
  need,
  needChangeHandler,
  items,
  itemsChangeHandler,
  urgency,
  urgencyChangeHandler,
  newCourier,
  newCourierChangeHandler,
  enteredConcerns,
  concernsChangeHandler,
}) => {
  return (
    <>
      <h1>
        Thank you for your responses so far. Statelines will be exploring an
        innovative but low cost digitally driven model for facilitating the
        delivery of items. The questions following help us understand and
        quantify your expectation, as a prospective user of our service
      </h1>
      {/* question 6 */}
      <li className="mb-6">
        <p className="text-green">Understanding the Need</p>
        <label>
          How often would you have the need to send items by courier?
        </label>
        <div className="flex gap-4">
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              need === "daily" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="daily"
              type="radio"
              name="need"
              value="daily"
              onChange={needChangeHandler}
              checked={need === "daily"}
            />
            <span className="pr-4 font-medium text-black">Daily</span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              need === "weekly" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="weekly"
              type="radio"
              name="need"
              value="weekly"
              onChange={needChangeHandler}
              checked={need === "weekly"}
            />
            <span className="pr-4 font-medium text-black">Weekly</span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              need === "monthly" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="monthly"
              type="radio"
              name="need"
              value="monthly"
              onChange={needChangeHandler}
              checked={need === "monthly"}
            />
            <span className="pr-4 font-medium text-black">Monthly</span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              need === "varies" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="varies"
              type="radio"
              name="need"
              value="varies"
              onChange={needChangeHandler}
              checked={need === "varies"}
            />
            <span className="pr-4 font-medium text-black">Varies</span>{" "}
          </label>
        </div>
      </li>

      {/* question 7 */}
      <li className="mb-6">
        <p className="mb-2 font-medium text-green">What is Couriered</p>{" "}
        <p className="mb-4 font-medium">
          Can you select from the options, using the checkboxes provided, the
          types of items you might wish to have couriered to a given location?
        </p>{" "}
        <div className="flex gap-4">
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              items === "Foodstuff and perishables" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="Foodstuff and perishables"
              type="radio"
              name="items"
              value="Foodstuff and perishables"
              onChange={itemsChangeHandler}
              checked={items === "Foodstuff and perishables"}
            />
            <span className="pr-4 font-medium text-black">
              Foodstuff and perishables
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              items === "Packed and sealed items" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="Packed and sealed items"
              type="radio"
              name="items"
              value="Packed and sealed items"
              onChange={itemsChangeHandler}
              checked={items === "Packed and sealed items"}
            />
            <span className="pr-4 font-medium text-black">
              Packed and sealed items
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              items === "Documents and papers" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="Documents and papers"
              type="radio"
              name="items"
              value="Documents and papers"
              onChange={itemsChangeHandler}
              checked={items === "Documents and papers"}
            />
            <span className="pr-4 font-medium text-black">
              Documents and papers
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              items === "It will or may vary based on what I need to send" &&
              checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="It will or may vary based on what I need to send"
              type="radio"
              name="items"
              value="It will or may vary based on what I need to send"
              onChange={itemsChangeHandler}
              checked={
                items === "It will or may vary based on what I need to send"
              }
            />
            <span className="pr-4 font-medium text-black">
              It will or may vary based on what I need to send
            </span>{" "}
          </label>
        </div>
      </li>

      {/* question 8 */}
      <li className=" mb-6">
        <p className="mb-2 font-medium text-green">Size of Your Package</p>{" "}
        <p className="mb-4 font-medium">
          Can you offer an anticipated estimate of the size and weight of your
          package?
        </p>{" "}
        <div className="flex flex-wrap gap-4">
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              packageSize === "mini" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="mini"
              type="radio"
              name="packageSize"
              value="mini"
              onChange={packageSizeChangeHandler}
              checked={packageSize === "mini"}
            />
            <span className="pr-4 font-medium text-black">
              Small package (weight under or below 0.5KG)
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              packageSize === "small" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="packageSize"
              type="radio"
              name="packageSize"
              value="small"
              onChange={packageSizeChangeHandler}
              checked={packageSize === "small"}
            />
            <span className="pr-4 font-medium text-black">
              Small package (0.5KG to 2KG OR 4.5 in x 8.5 in x 6 in)
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              packageSize === "medium" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="medium"
              type="radio"
              name="packageSize"
              value="medium"
              onChange={packageSizeChangeHandler}
              checked={packageSize === "medium"}
            />
            <span className="pr-4 font-medium text-black">
              Medium package (2KG to 5KG OR 5 in x 6 in x 10.5 in)
            </span>{" "}
          </label>
          <label
            className={`space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              packageSize === "large" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="large"
              type="radio"
              name="packageSize"
              value="large"
              onChange={packageSizeChangeHandler}
              checked={packageSize === "large"}
            />
            <span className="pr-4 font-medium text-black">
              Large package (over 5KG OR larger than medium size)
            </span>{" "}
          </label>
        </div>
      </li>

      {/* question 9 */}
      <li className=" mb-6">
        <p className="mb-2 font-medium text-green">Delivery Urgency</p>{" "}
        <p className="mb-4 font-medium">
          Can you offer an anticipated estimate of the size and weight of your
          package?
        </p>{" "}
        <div className="flex flex-wrap gap-4">
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              urgency === "yes" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="yes"
              type="radio"
              name="urgency"
              value="yes"
              onChange={urgencyChangeHandler}
              checked={urgency === "yes"}
            />
            <span className="pr-4 font-medium text-black">YES</span>{" "}
          </label>
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              urgency === "no" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="low"
              type="radio"
              name="urgency"
              value="no"
              onChange={urgencyChangeHandler}
              checked={urgency === "no"}
            />
            <span className="pr-4 font-medium text-black">NO</span>{" "}
          </label>
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              urgency === "I am flexible" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="I am flexible"
              type="radio"
              name="urgency"
              value="I am flexible"
              onChange={urgencyChangeHandler}
              checked={urgency === "I am flexible"}
            />
            <span className="pr-4 font-medium text-black">I am flexible</span>{" "}
          </label>
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              urgency === "vary" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="vary"
              type="radio"
              name="urgency"
              value="vary"
              onChange={urgencyChangeHandler}
              checked={urgency === "vary"}
            />
            <span className="pr-4 font-medium text-black">
              Each package sent will vary regarding delivery urgency
            </span>{" "}
          </label>
        </div>
      </li>

      {/* question 10 */}
      <li className="mb-6">
        <p className="mb-2 font-medium text-green">sing a New Courier.</p>
        <p className="mb-4 font-medium">
          Are you uncomfortable with using and patronising the services of an
          unknown courier company?
        </p>

        <div className="flex flex-wrap gap-4">
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              newCourier === "yes" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="yes"
              type="radio"
              name="newCourier"
              value="yes"
              onChange={newCourierChangeHandler}
              checked={newCourier === "yes"}
            />
            <span className="pr-4 font-medium text-black">YES</span>{" "}
          </label>
          <label
            className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black px-2 ${
              newCourier === "no" && checked
            }`}
          >
            <input
              className={`opacity-0`}
              required
              id="low"
              type="radio"
              name="newCourier"
              value="no"
              onChange={newCourierChangeHandler}
              checked={newCourier === "no"}
            />
            <span className="pr-4 font-medium text-black">NO</span>{" "}
          </label>
        </div>
      </li>

      {/* question 11 */}
      <li className="mb-6">
        <p className="mb-2 font-medium text-green"> New Courier Concerns</p>
        <p className="mb-4 font-medium">
          If you are uncomfortable about using a new courier, can you kindly
          help explain what your concerns are?
        </p>
        <input
          type="compensation"
          label="Compensation"
          placeholder="Enter expected compensation amount"
          value={enteredConcerns}
          required
          onChange={concernsChangeHandler}
          className="color-white w-full rounded-lg bg-black px-4 py-2 text-center text-white outline-none lg:w-2/4"
        />
      </li>
    </>
  );
};

export default UserQuestions;
