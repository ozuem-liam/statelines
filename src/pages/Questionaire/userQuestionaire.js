import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import UserQuestions from "../../components/UserQuestions";
import CourierQuestions from "../../components/CourierQuestions";
import ModalComponent from "../../components/ModalComponent";

const UserQuestionaire = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [location, setEnteredLocation] = useState("");
  const [comment, setComment] = useState("");
  const [gender, setGender] = useState("");
  const [show, setShow] = useState(false);
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [scale, setScale] = useState("");
  const [qualification, setQualification] = useState("");
  const [received, setReceived] = useState("");
  const [sealed, setSealed] = useState("");
  const [liability, setLiability] = useState("");
  const [travelPoint, setTravelPoint] = useState("");
  const [price, setPrice] = useState("");
  const [screening, setScreening] = useState("");
  const [listLocation, setlistLocation] = useState("");
  const [weight, setWeight] = useState("");
  const [plans, setPlans] = useState("");
  const [pickupAndDropoff, setPickupAndDropoff] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredCompensation, setEnteredCompensation] = useState("");
  const [packageSize, setPackageSize] = useState("");
  const [need, setNeed] = useState("");
  const [items, setItems] = useState("");
  const [urgency, setUrgency] = useState("");
  const [newCourier, setNewCourier] = useState("");
  const [enteredConcerns, setEnteredConcerns] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checked = "bg-green text-white";

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const commentHandler = (event) => {
    setComment(event.target.value);
  };

  const listLocationHandler = (event) => {
    setlistLocation(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setWeight(event.target.value);
  };

  const plansChangeHandler = (event) => {
    setPlans(event.target.value);
  };

  const pickupAndDropoffChangeHandler = (event) => {
    setPickupAndDropoff(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const compensationChangeHandler = (event) => {
    setEnteredCompensation(event.target.value);
  };

  const packageSizeChangeHandler = (event) => {
    setPackageSize(event.target.value);
  };

  const scaleChangeHandler = (event) => {
    setScale(event.target.value);
  };

  const qualificationChangeHandler = (event) => {
    setQualification(event.target.value);
  };

  const needChangeHandler = (event) => {
    setNeed(event.target.value);
  };
  const itemsChangeHandler = (event) => {
    setItems(event.target.value);
  };
  const urgencyChangeHandler = (event) => {
    setUrgency(event.target.value);
  };
  const newCourierChangeHandler = (event) => {
    setNewCourier(event.target.value);
  };
  const concernsChangeHandler = (event) => {
    setEnteredConcerns(event.target.value);
  };

  const submitHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      if (qualification === "yes") {
        const response = await fetch(
          "https://smithswork-sl-v1-api.onrender.com/api/sender/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: enteredEmail,
              gender: gender,
              age: age,
              location: location,
              scale: scale,
              qualification: qualification,
              listLocation: listLocation,
              weight: weight,
              plans: plans,
              pickupAndDropoff: pickupAndDropoff,
              enteredAddress: enteredAddress,
              enteredCompensation: enteredCompensation,
              notes: comment,
            }),
          }
        );
        if (!response.ok) {
          setLoading(false);
          toast.error("Something went wrong!");
          throw new Error("couldn't fetch data");
        }
        setLoading(false);
        toast.success("Your answers have been successfully recorded 😄!");
        navigate("/Thankyou");
      } else {
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
              age: age,
              location: location,
              scale: scale,
              qualification: qualification,
              packageSize: packageSize,
              need: need,
              items: items,
              urgency: urgency,
              newCourier: newCourier,
              enteredConcerns: enteredConcerns,
              notes: comment,
            }),
          }
        );
        if (!response.ok) {
          setLoading(false);
          toast.error("Something went wrong!");
          throw new Error("couldn't fetch data");
        }
        setLoading(false);
        toast.success("Your answers have been successfully recorded 😄!");
        navigate("/Thankyou");
      }
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <ModalComponent
        show={show}
        handleClose={handleClose}
        subject="Community Courier qualification"
        content="it"
      />
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
          <li className="mb-6">
            <p className="mb-2 text-green">Gender</p>{" "}
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
          <li className=" mb-6">
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
                className={` space-x-1 rounded-2xl border-2 border-solid border-black px-1 px-2 ${
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
          <li className=" mb-6">
            <div>
              <p className="mb-2 font-medium text-green">- Primary location</p>
              <p className="mb-4 font-medium">In what city do you reside?</p>
              <input
                type="location"
                label="Primary location"
                placeholder="enter location name"
                value={location}
                required
                onChange={locationChangeHandler}
                className="color-white w-full rounded-lg bg-black px-4 py-2 text-center text-white outline-none lg:w-2/4"
              />
            </div>
          </li>

          {/* question 4 */}
          <li className=" mb-6">
            <p className="mb-2 font-medium text-green">- Travel frequency</p>
            <p className="mb-4 font-medium">
              Within a month, how often do you travel from your primary location
              to other states or locations?
            </p>
            <div className="flex gap-4">
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "rarely" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="scale"
                  value="rarely"
                  onChange={scaleChangeHandler}
                  checked={scale === "rarely"}
                />
                <span className="pr-4 font-medium text-black">Rarely</span>{" "}
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "sometimes" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="scale"
                  value="sometimes"
                  onChange={scaleChangeHandler}
                  checked={scale === "sometimes"}
                />
                <span className="pr-4 font-medium text-black">
                  Sometimes (at least 1 trip)
                </span>
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  scale === "often" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="scale"
                  value="often"
                  onChange={scaleChangeHandler}
                  checked={scale === "often"}
                />
                <span className="pr-4 font-medium text-black">
                  Often (2 trips at least)
                </span>
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
                <span className="pr-4 font-medium text-black">
                  Frequently (more than 3 trips)
                </span>
              </label>
            </div>
          </li>

          {/* question 5 */}
          <li className=" mb-6">
            <p className="mb-2 font-medium text-green">
              - Community Courier qualification
            </p>
            <p className="mb-4 font-medium">
              Are you interested in making supplementary earnings based on your
              frequent travels?
            </p>
            <div className="flex gap-4">
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  qualification === "yes" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="qualification"
                  value="yes"
                  onChange={qualificationChangeHandler}
                  checked={qualification === "yes"}
                />
                <span className="pr-4 font-medium text-black">
                  “Yes” (progress to Community Corier questions)
                </span>{" "}
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  qualification === "no" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="qualification"
                  value="no"
                  onChange={qualificationChangeHandler}
                  checked={qualification === "no"}
                />
                <span className="pr-4 font-medium text-black">
                  {" "}
                  “No” (revert to Service User questions)
                </span>
              </label>
              <label
                className={`flex items-baseline space-x-1 rounded-2xl border-2 border-solid border-black  ${
                  qualification === "undecided”" && checked
                }`}
              >
                <input
                  className={`opacity-0`}
                  required
                  type="radio"
                  name="qualification"
                  value="undecided”"
                  onChange={qualificationChangeHandler}
                  checked={qualification === "undecided”"}
                />
                <span className="pr-4 font-medium text-black">Undecided</span>
              </label>
            </div>
          </li>

          {qualification === "yes" ? (
            <CourierQuestions
              listLocation={listLocation}
              listLocationHandler={listLocationHandler}
              checked={checked}
              weight={weight}
              weightChangeHandler={weightChangeHandler}
              plans={plans}
              plansChangeHandler={plansChangeHandler}
              pickupAndDropoff={pickupAndDropoff}
              pickupAndDropoffChangeHandler={pickupAndDropoffChangeHandler}
              enteredAddress={enteredAddress}
              addressChangeHandler={addressChangeHandler}
              enteredCompensation={enteredCompensation}
              compensationChangeHandler={compensationChangeHandler}
            />
          ) : (
            <UserQuestions
              packageSize={packageSize}
              packageSizeChangeHandler={packageSizeChangeHandler}
              checked={checked}
              need={need}
              needChangeHandler={needChangeHandler}
              items={items}
              itemsChangeHandler={itemsChangeHandler}
              urgency={urgency}
              urgencyChangeHandler={urgencyChangeHandler}
              newCourier={newCourier}
              newCourierChangeHandler={newCourierChangeHandler}
              enteredConcerns={enteredConcerns}
              concernsChangeHandler={concernsChangeHandler}
            />
          )}
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
          className="mt-8 rounded-3xl bg-green px-6 py-2 font-medium text-white"
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

export default UserQuestionaire;
