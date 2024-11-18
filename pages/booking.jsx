import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatFullDate, formatTime, isFormValid } from "@/utils/utils";
import { phoneNumber } from "@/constant/headerConstant";
import { useData } from "../utils/DataContext";
import LazyImage from "./components/ui/LazyImage";

const Booking = () => {
  const router = useRouter();
  const { selectedAirline, updateBookingDetail } = useData();

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [travellerPriceObject, setTravellerPriceObject] = useState();
  const [passengers, setPassengers] = useState([]);

  const [cardInformation, setCardInformation] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const [travellerInformation, setTravellerInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [validEmail, setValidEmail] = useState(true);

  const validateEmail = (e) => {
    const value = e.target.value || "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    setValidEmail(isValid);
  };

  const confirmBooking = () => {
    setFormSubmitted(true);
    if (isFormValid(cardInformation, travellerInformation, passengers)) {
      updateBookingDetail({
        flightDetails: selectedFlight,
        passengers: passengers,
        travellerInformation: travellerInformation,
        travellerPriceObject: travellerPriceObject,
        cardInformation: cardInformation,
      });
      router.push("/booking-confirmation");
    }
  };

  const handleInputChange = (index, name, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);
  };

  const handleTravellarChange = (name, value) => {
    setTravellerInformation((prevTravellerInformation) => ({
      ...prevTravellerInformation,
      [name]: value,
    }));
  };

  const handlePaymentChange = (name, value) => {
    setCardInformation((prevCardInformation) => ({
      ...prevCardInformation,
      [name]: value,
    }));
  };

  useEffect(() => {
    const curentPassenger = [];
    if (selectedFlight && selectedFlight?.travelerPricings?.length) {
      for (let i = 0; i < selectedFlight.travelerPricings.length; i++) {
        curentPassenger.push({
          title: "",
          firstName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
        });
      }
    }
    setPassengers(curentPassenger);
  }, [selectedFlight]);

  useEffect(() => {
    const travellersPriceDetails = (type) => {
      let travellerObject = {
        count: 0,
        basePrice: 0,
        totalPrice: 0,
        taxAndfees: 0,
      };
      if (selectedFlight && selectedFlight?.travelerPricings?.length) {
        const travellerPricingDetails = selectedFlight.travelerPricings.filter(
          (item) => item.travelerType === type
        );
        if (travellerPricingDetails.length) {
          travellerObject = {
            count: travellerPricingDetails.length,
            basePrice: Number(
              parseFloat(travellerPricingDetails[0]?.price?.base).toFixed(2)
            ),
            totalPrice: Number(
              parseFloat(travellerPricingDetails[0]?.price?.total).toFixed(2)
            ),
            taxAndfees: Number(
              (
                parseFloat(travellerPricingDetails[0]?.price?.total) -
                parseFloat(travellerPricingDetails[0]?.price?.base)
              ).toFixed(2)
            ),
          };
        }
      }
      return travellerObject;
    };

    const trPriceObj = {
      adults: travellersPriceDetails("ADULT"),
      children: travellersPriceDetails("CHILD"),
      infants: travellersPriceDetails("HELD_INFANT"),
    };

    setTravellerPriceObject(trPriceObj);
  }, [selectedFlight]);

  useEffect(() => {
    setSelectedFlight(selectedAirline);
  }, [selectedAirline]);

  return (
    <div>
      <div className="container-fluid title-bg">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 text-center">
              <h2>
                <em>Felicitaciones, tienes las mejores tarifas.</em>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {selectedFlight && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 pt-4 pb-4 box-center">
              <div className="row">
                <div className="col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6">
                  <h4>Flight Details</h4>
                </div>
                <div className="col-12 mt-3 flight-box p-2 pb-0 mb-4">
                  <div className="row p-3 pb-0">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                      {selectedFlight?.itineraries?.map((it, i) => (
                        <div className="row expend mb-4" key={i}>
                          <div className="col-12">
                            {i === 0 && <h6>Flight Details</h6>}
                            <p>
                              <strong>
                                {i === 0 && (
                                  <span>
                                    <strong>
                                      <span className="float-start">
                                        <LazyImage
                                          src="/departures.png"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </span>
                                      &nbsp;&nbsp;Depart
                                    </strong>
                                  </span>
                                )}
                                {i === 1 && (
                                  <span>
                                    <strong>
                                      <span className="float-start">
                                        <LazyImage
                                          src="/arrivals.png"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </span>
                                      &nbsp;&nbsp;Return
                                    </strong>
                                  </span>
                                )}
                                {formatFullDate(
                                  it?.segments?.[0]?.departure?.at
                                )}
                              </strong>
                              <span className="float-end">
                                <strong> Total Trip Duration: </strong>
                                <i className="far fa-clock"></i>{" "}
                                <strong>
                                  {it?.duration?.replace("PT", "")}
                                </strong>{" "}
                              </span>
                            </p>
                          </div>
                          {it?.segments?.map((s, j) => (
                            <React.Fragment key={j}>
                              <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                <span className="float-start">
                                  <LazyImage
                                    src={`/${s?.carrierName}.png`}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </span>
                                <span className="float-start">
                                  {s?.carrierName}
                                  <br />
                                  Airlines
                                  <br />
                                  {s?.carrierCode}-{s?.number}
                                </span>
                                <div className="col-12 mb-2 cabin-box">
                                  <ul>
                                    <li>
                                      <strong>Duration: </strong>
                                      <i className="far fa-clock"></i>
                                      {s?.duration.replace("PT", "")}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                                <div className="row">
                                  <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                    <div className="airport-name">
                                      {formatFullDate(s?.departure?.at)}
                                    </div>
                                  </div>
                                  <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                    <div className="flight-time">
                                      {formatTime(s?.departure?.at)}
                                    </div>
                                    <div className="trip-duration">
                                      {s?.departure?.iataCode}
                                    </div>
                                  </div>
                                  <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                    <div className="flight-time">
                                      {formatTime(s?.arrival?.at)}
                                    </div>
                                    <div className="trip-duration">
                                      {s?.arrival?.iataCode}
                                    </div>
                                  </div>
                                  <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-end">
                                    <div className="airport-name">
                                      {formatFullDate(s?.arrival?.at)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3 pt-4 pb-4 box-right">
              <h6>Fare Summary</h6>
              <p>
                {travellerPriceObject.adults.count} Adult |{" "}
                {travellerPriceObject.children.count} Child |{" "}
                {travellerPriceObject.infants.count} Infant
              </p>
              <hr />
              <div className="form-check pl-0">
                <label className="form-check-label" htmlFor="nonstop">
                  <span className="float-start fare-text">
                    <strong>Base fare</strong>
                  </span>{" "}
                  <span className="float-end fare-text">
                    <strong>$ {selectedFlight?.price?.base}</strong>
                  </span>
                </label>
                {travellerPriceObject?.adults?.count ? (
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      Adult ({travellerPriceObject?.adults?.count} ×{" "}
                      {travellerPriceObject?.adults?.basePrice})
                    </span>{" "}
                    <span className="float-end fare-text">
                      {travellerPriceObject?.adults?.count *
                        travellerPriceObject?.adults?.basePrice}
                    </span>
                  </label>
                ) : null}
                {travellerPriceObject?.children?.count ? (
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      Child ({travellerPriceObject?.children?.count} ×{" "}
                      {travellerPriceObject?.children?.basePrice})
                    </span>{" "}
                    <span className="float-end fare-text">
                      {travellerPriceObject?.children?.count *
                        travellerPriceObject?.children?.basePrice}
                    </span>
                  </label>
                ) : null}
                {travellerPriceObject?.infants?.count ? (
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      Infant ({travellerPriceObject?.infants?.count} ×{" "}
                      {travellerPriceObject?.infants?.basePrice})
                    </span>{" "}
                    <span className="float-end fare-text">
                      {travellerPriceObject?.infants?.count *
                        travellerPriceObject?.infants?.basePrice}
                    </span>
                  </label>
                ) : null}
              </div>
              <hr />
              <div className="form-check pl-0">
                <label className="form-check-label" htmlFor="nonstop">
                  <span className="float-start fare-text">
                    <strong>Taxes &amp; Fees</strong>
                  </span>{" "}
                  <span className="float-end fare-text">
                    <strong>$ {selectedFlight?.price?.taxAndFees}</strong>
                  </span>
                </label>
                {travellerPriceObject?.adults?.count ? (
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      Adult ({travellerPriceObject?.adults?.count} ×{" "}
                      {travellerPriceObject?.adults?.taxAndfees})
                    </span>{" "}
                    <span className="float-end fare-text">
                      {travellerPriceObject?.adults?.count *
                        travellerPriceObject?.adults?.taxAndfees}
                    </span>
                  </label>
                ) : null}
                {travellerPriceObject?.children?.count ? (
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      Child ({travellerPriceObject?.children?.count} ×{" "}
                      {travellerPriceObject?.children?.taxAndfees})
                    </span>{" "}
                    <span className="float-end fare-text">
                      {travellerPriceObject?.children?.count *
                        travellerPriceObject?.children?.taxAndfees}
                    </span>
                  </label>
                ) : null}
                {travellerPriceObject?.infants?.count ? (
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      Infant ({travellerPriceObject?.infants?.count} ×{" "}
                      {travellerPriceObject?.infants?.taxAndfees})
                    </span>{" "}
                    <span className="float-end fare-text">
                      {travellerPriceObject?.infants?.count *
                        travellerPriceObject?.infants?.taxAndfees}
                    </span>
                  </label>
                ) : null}
              </div>
              <div className="form-check pl-0">
                <label className="form-check-label" htmlFor="onestop">
                  <span className="float-start fare-total">
                    <strong>Total Price:</strong>
                  </span>{" "}
                  <span className="float-end fare-total">
                    <strong>$ {selectedFlight?.price?.grandTotal}</strong>
                  </span>
                </label>
              </div>
              <hr />
            </div>

            <div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-7 col-lg-9 col-xl-9 box-center">
                  <div className="row">
                    <div className="col-12">
                      <h4>Passenger Details</h4>
                      <p>
                        Enter traveler name(s) and date(s) of birth exactly as
                        shown on the passport or other government-issued photo
                        ID to be used on this trip. Please ensure your ID is
                        valid for at least 6 months after your date of travel.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mt-3 protection-box p-0 mb-4">
                    <div className="accordion">
                      {selectedFlight?.travelerPricings?.map(
                        (traveller, index) => (
                          <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded="true"
                                aria-controls={`collapse-${index}`}
                              >
                                <i
                                  className="fa fa-user"
                                  aria-hidden="true"
                                ></i>
                                Passenger {traveller?.travelerId}:
                                {traveller?.travelerType === "HELD_INFANT"
                                  ? `${traveller.travelerType
                                      .replace("HELD_", "")
                                      .charAt(0)
                                      .toUpperCase()}${traveller?.travelerType
                                      .slice(6)
                                      .toLowerCase()}`
                                  : `${traveller?.travelerType
                                      .charAt(0)
                                      .toUpperCase()}${traveller?.travelerType
                                      .slice(1)
                                      .toLowerCase()}`}
                              </button>
                            </h2>
                            <div
                              className="accordion-collapse collapse show"
                              aria-labelledby={`heading-${index}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <form className="row g-3">
                                  <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                    <label
                                      htmlFor={`title-${index}`}
                                      className="form-label"
                                    >
                                      <strong>Title*</strong>
                                    </label>
                                    <select
                                      className="form-control"
                                      name={`title-${traveller.travelerId}`}
                                      value={passengers?.[index]?.["title"]}
                                      onChange={(e) =>
                                        handleInputChange(
                                          index,
                                          "title",
                                          e.target.value
                                        )
                                      }
                                    >
                                      <option value="">Select Title</option>
                                      <option value="Mr">Mr</option>
                                      <option value="Mrs">Mrs</option>
                                      <option value="Miss">Miss</option>
                                      <option value="Master">Master</option>
                                    </select>
                                    {!passengers?.[index]?.["title"] &&
                                      formSubmitted && (
                                        <div className="text-danger">
                                          Title is required
                                        </div>
                                      )}
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-8 col-lg-3 col-xl-3">
                                    <label
                                      htmlFor={`firstname-${index}`}
                                      className="form-label"
                                    >
                                      <strong>First Name*</strong>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      maxLength={150}
                                      name={`firstname-${traveller?.travelerId}`}
                                      value={passengers?.[index]?.["firstName"]}
                                      onChange={(e) =>
                                        handleInputChange(
                                          index,
                                          "firstName",
                                          e.target.value
                                        )
                                      }
                                      placeholder="First Name"
                                    />
                                    {!passengers?.[index]?.["firstName"] &&
                                      formSubmitted && (
                                        <div className="text-danger">
                                          First Name is required
                                        </div>
                                      )}
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                    <label
                                      htmlFor={`lastname-${index}`}
                                      className="form-label"
                                    >
                                      <strong>Last Name*</strong>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      maxLength={150}
                                      name={`lastname-${traveller?.travelerId}`}
                                      value={passengers?.[index]?.["lastName"]}
                                      onChange={(e) =>
                                        handleInputChange(
                                          index,
                                          "lastName",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Last Name"
                                    />
                                    {!passengers?.[index]?.["lastName"] &&
                                      formSubmitted && (
                                        <div className="text-danger">
                                          Last Name is required
                                        </div>
                                      )}
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      htmlFor={`gender-${index}`}
                                      className="form-label"
                                    >
                                      <strong>Gender*</strong>
                                    </label>
                                    <select
                                      className="form-control"
                                      name={`gender-${traveller?.travelerId}`}
                                      value={passengers?.[index]?.["gender"]}
                                      onChange={(e) =>
                                        handleInputChange(
                                          index,
                                          "gender",
                                          e.target.value
                                        )
                                      }
                                    >
                                      <option value="">Select Gender</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                      <option value="Other">Other</option>
                                    </select>
                                    {!passengers?.[index]?.["gender"] &&
                                      formSubmitted && (
                                        <div className="text-danger">
                                          Gender is required
                                        </div>
                                      )}
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      htmlFor={`dob-${index}`}
                                      className="form-label"
                                    >
                                      <strong>Date Of Birth*</strong>
                                    </label>
                                    <input
                                      type="date"
                                      name={`dob-${traveller?.travelerId}`}
                                      value={
                                        passengers?.[index]?.["dateOfBirth"]
                                      }
                                      onChange={(e) =>
                                        handleInputChange(
                                          index,
                                          "dateOfBirth",
                                          e.target.value
                                        )
                                      }
                                      className="form-control"
                                    />
                                    {!passengers?.[index]?.["dateOfBirth"] &&
                                      formSubmitted && (
                                        <div className="text-danger">
                                          Date of Birth is required
                                        </div>
                                      )}
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 pb-4 box-center">
                  <div className="col-12 mt-3 protection-box p-3 mb-4">
                    <div className="row">
                      <div className="col-12">
                        <h4>Payment Information</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-3 mb-3 tra-tab">
                        <ul
                          className="nav nav-tabs justify-content-center"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              data-bs-toggle="tab"
                              data-bs-target="#credit"
                              type="button"
                              role="tab"
                              aria-controls="credit"
                              aria-selected="true"
                            >
                              <i
                                className="fa fa-credit-card"
                                aria-hidden="true"
                              ></i>{" "}
                              Credit/Debit Card
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content pt-4">
                          <div
                            className="tab-pane fade show active"
                            role="tabpanel"
                            aria-labelledby="Credit-tab"
                          >
                            <form className="row g-3">
                              <div className="col-md-6">
                                <label
                                  htmlFor="inputPassword4"
                                  className="form-label"
                                >
                                  Card Number*
                                </label>
                                <input
                                  type="password"
                                  name="cardNumber"
                                  maxLength={20}
                                  value={cardInformation["cardNumber"]}
                                  onChange={(e) =>
                                    handlePaymentChange(
                                      "cardNumber",
                                      e.target.value
                                    )
                                  }
                                  className="form-control"
                                />
                                {!cardInformation["cardNumber"] &&
                                  formSubmitted && (
                                    <div className="text-danger">
                                      Card Number is required
                                    </div>
                                  )}
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="inputcard"
                                  className="form-label"
                                >
                                  Name on Card*
                                </label>
                                <input
                                  type="text"
                                  name="nameOnCard"
                                  maxLength={150}
                                  value={cardInformation["nameOnCard"]}
                                  onChange={(e) =>
                                    handlePaymentChange(
                                      "nameOnCard",
                                      e.target.value
                                    )
                                  }
                                  className="form-control"
                                />
                                {!cardInformation["nameOnCard"] &&
                                  formSubmitted && (
                                    <div className="text-danger">
                                      Name on Card is required
                                    </div>
                                  )}
                              </div>
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-6">
                                    <label
                                      htmlFor="inputcard"
                                      className="form-label"
                                    >
                                      Expiration date*
                                    </label>
                                    <select
                                      name="expiryMonth"
                                      value={cardInformation["expiryMonth"]}
                                      onChange={(e) =>
                                        handlePaymentChange(
                                          "expiryMonth",
                                          e.target.value
                                        )
                                      }
                                      className="form-select"
                                    >
                                      <option value="">Select Month</option>
                                      <option value="January">January</option>
                                      <option value="February">February</option>
                                      <option value="March">March</option>
                                      <option value="April">April</option>
                                      <option value="May">May</option>
                                      <option value="June">June</option>
                                      <option value="July">July</option>
                                      <option value="August">August</option>
                                      <option value="September">
                                        September
                                      </option>
                                      <option value="October">October</option>
                                      <option value="November">November</option>
                                      <option value="December">December</option>
                                    </select>
                                    {!cardInformation["expiryMonth"] &&
                                      formSubmitted && (
                                        <div className="text-danger">
                                          Expiration date is required
                                        </div>
                                      )}
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      htmlFor="inputcard"
                                      className="form-label"
                                    >
                                      Year*
                                    </label>
                                    <select
                                      name="expiryYear"
                                      value={cardInformation["expiryYear"]}
                                      onChange={(e) =>
                                        handlePaymentChange(
                                          "expiryYear",
                                          e.target.value
                                        )
                                      }
                                      className="form-select"
                                    >
                                      <option value="">Select Year</option>
                                      {/* Add years dynamically if needed */}
                                      <option value="2023">2023</option>
                                      <option value="2024">2024</option>
                                      <option value="2025">2025</option>
                                      <option value="2026">2026</option>
                                      <option value="2027">2027</option>
                                      <option value="2028">2028</option>
                                      <option value="2029">2029</option>
                                      <option value="2030">2030</option>
                                      <option value="2031">2031</option>
                                    </select>
                                    {!cardInformation["expiryYear"] &&
                                      formSubmitted && (
                                        <div className="text-danger">
                                          Year is required
                                        </div>
                                      )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="inputcard"
                                  className="form-label"
                                >
                                  CVV*
                                </label>
                                <input
                                  type="text"
                                  name="cvv"
                                  maxLength={4}
                                  value={cardInformation["cvv"]}
                                  onChange={(e) =>
                                    handlePaymentChange("cvv", e.target.value)
                                  }
                                  className="form-control"
                                />
                                {!cardInformation["cvv"] && formSubmitted && (
                                  <div className="text-danger">
                                    CVV is required
                                  </div>
                                )}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 pb-4 box-center">
                <div className="col-12 protection-box p-3 mb-4">
                  <div className="row">
                    <div className="col-12">
                      <h4>Traveller Details</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mt-3 mb-3 tra-tab">
                      <div>
                        <div
                          className="fade show active"
                          aria-labelledby="europe-tab"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="note-bg">
                                <span className="note-left">Note</span> Please
                                make sure you enter the Name as per your govt.
                                photo id.
                              </div>
                            </div>
                          </div>
                          <form className="mt-3">
                            <div className="row g-3 mb-3">
                              <label
                                htmlFor=""
                                className="col-12 col-sm-3 col-md-4 col-lg-2 col-xl-2 col-form-label"
                              >
                                Adult Name*
                              </label>
                              <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <input
                                  type="text"
                                  name="t-firstname"
                                  maxLength={150}
                                  value={travellerInformation["firstName"]}
                                  onChange={(e) =>
                                    handleTravellarChange(
                                      "firstName",
                                      e.target.value
                                    )
                                  }
                                  className="form-control"
                                  placeholder="First Name"
                                />
                                {!travellerInformation["firstName"] &&
                                  formSubmitted && (
                                    <div className="text-danger">
                                      First Name is required
                                    </div>
                                  )}
                              </div>
                              <div className="ccol-8 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <input
                                  type="text"
                                  name="t-lastname"
                                  maxLength={150}
                                  value={travellerInformation["lastName"]}
                                  onChange={(e) =>
                                    handleTravellarChange(
                                      "lastName",
                                      e.target.value
                                    )
                                  }
                                  className="form-control"
                                  placeholder="Last Name"
                                />
                                {!travellerInformation["lastName"] &&
                                  formSubmitted && (
                                    <div className="text-danger">
                                      Last Name is required
                                    </div>
                                  )}
                              </div>
                            </div>
                            <div className="row g-3 mb-3">
                              <label
                                htmlFor="traveller-email"
                                className="col-5 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-form-label"
                              >
                                Email Address*
                              </label>
                              <div className="col-7 col-sm-8 col-md-8 col-lg-4 col-xl-4">
                                <input
                                  type="email"
                                  name="t-email"
                                  value={travellerInformation["email"]}
                                  onChange={(e) =>
                                    handleTravellarChange(
                                      "email",
                                      e.target.value
                                    )
                                  }
                                  onKeyUp={validateEmail}
                                  className="form-control"
                                  placeholder="Email"
                                />
                                {!travellerInformation["email"] &&
                                  formSubmitted && (
                                    <div className="text-danger">
                                      Email is required
                                    </div>
                                  )}
                                {travellerInformation["email"] &&
                                  !validEmail && (
                                    <div className="text-danger">
                                      Invalid email
                                    </div>
                                  )}
                              </div>
                              <label
                                htmlFor=""
                                className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-form-label"
                              >
                                <small>
                                  Your ticket will be sent to this email address
                                </small>
                              </label>
                            </div>
                            <div className="row g-3 mb-3">
                              <label
                                htmlFor=""
                                className="col-12 col-sm-3 col-md-4 col-lg-2 col-xl-2 col-form-label"
                              >
                                Mobile No*
                              </label>
                              <div className="col-8 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <input
                                  type="tel"
                                  className="form-control"
                                  name="t-mobile"
                                  maxLength={15}
                                  value={travellerInformation["mobile"]}
                                  onChange={(e) =>
                                    handleTravellarChange(
                                      "mobile",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Mobile No"
                                />
                                {!travellerInformation["mobile"] &&
                                  formSubmitted && (
                                    <div className="text-danger">
                                      Mobile No is required
                                    </div>
                                  )}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 col-8 col-sm-8 col-md-8 col-lg-3 col-xl-3 mx-auto mb-4">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={confirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
      {!selectedFlight && (
        <div className="container-xl noresult-main">
          <div className="col-sm-12 mt-5 pb-4 text-center">
            <LazyImage src="/not-found.png" className="img-fluid" alt="" />
            <h4 className="mt-4">No result found</h4>
            <p className="mb-0">
              We&apos;ve searched more than 250 airlines that we sell,
              <br />
              and couldn&apos;t find any flights.
            </p>
            <hr />
            <h6>Call us at (24x7)</h6>
            <h2>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </h2>
            <button
              type="button"
              className="btn btn-outline-primary mt-3"
              onClick={() => router.push("/")}
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i> Go Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
