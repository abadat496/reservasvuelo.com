import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { formatFullDate, formatTime, generateRandomNumber, generateRandomWord } from "@/utils/utils";
import { contactEmail, phoneNumber, website } from "@/constant/headerConstant";
import { sendMail } from "@/service/api";
import { useData } from "../utils/DataContext";
import LazyImage from "./components/ui/LazyImage";

const Confirmation = () => {
  const router = useRouter();

  const {
    bookingDetails,
    updateBookingDetail,
    resetFormData,
    updateSelectedAirline,
    updateSearchResult,
  } = useData();

  const [flightBookingDetails, setFlightBookingDetails] = useState(null);
  const [bookingReferenceNumber, setBookingReferenceNumber] = useState(null);
  const [pnr, setPnr] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const bookingDate = new Date();

  useEffect(() => {
    const no = generateRandomNumber();
    setBookingReferenceNumber(no);
  }, []);

  useEffect(() => {
    const pn = generateRandomWord();
    setPnr(pn);
  }, []);

  useEffect(() => {
    const sendConfirmMail = async (data) => {
      try {
        const response = await sendMail(data);
        if (!response?.status) {
          console.log("Failed to send the confirmation mail");
        }
        updateBookingDetail(null);
        resetFormData();
        updateSelectedAirline(null);
        updateSearchResult([]);
        setEmailSent(true);
      } catch (error) {
        console.error(error);
      }
    };
    if (
      flightBookingDetails &&
      Object.keys(flightBookingDetails).length != 0 &&
      !emailSent
    ) {
      let emailData = flightBookingDetails;
      emailData["itineraries"] = flightBookingDetails["itineraries"];
      emailData["bookingReferenceNumber"] = bookingReferenceNumber;
      emailData["pnr"] = pnr;
      emailData["bookingDate"] = new Date(bookingDate);
      emailData["cardInformation"] = flightBookingDetails["cardInformation"];
      emailData["type"] = "flight-confirmation";
      sendConfirmMail(emailData);
    }
  }, [flightBookingDetails, emailSent, pnr]);

  useEffect(() => {
    if (bookingDetails && Object.keys(bookingDetails).length != 0) {
      setFlightBookingDetails(bookingDetails);
    }
  }, [bookingDetails]);

  return (
    <>
      <Head>
        <title>{"Booking Conformations"}</title>
      </Head>
      <div>
        <div className="container-fluid title-bg">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 text-center">
                <h2>
                  <em>Confirmación de vuelo</em>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {flightBookingDetails && (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 pt-4 pb-4 box-center">
                <div className="col-12 mt-3 protection-box p-3 mb-4">
                  <div className="row">
                    <div className="col-12 mt-3 mb-3 tra-tab">
                      <div className="col-md-6">
                        <span>
                          {" "}
                          Booking Ref. No:-&nbsp;
                          <strong>{bookingReferenceNumber}</strong>
                        </span>
                      </div>
                      <div className="col-md-6">
                        <span>
                          {" "}
                          Status :-<strong> IN PROCESS</strong>
                        </span>
                      </div>
                      <div className="col-md-6">
                        <span>
                          {" "}
                          PNR :-<strong>{pnr}</strong>
                        </span>
                      </div>
                      <div className="col-md-6">
                        <span>
                          {" "}
                          Booking Date -{" "}
                          <strong>{formatFullDate(bookingDate)}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>Your booking request received</h3>
                  <p>&quot;Descubra nuestras tarifas exclusivas llamando al número no publicado. ¡Llame ahora! <br></br><strong className="blink bking">{phoneNumber}</strong>&quot;</p>
                  <div className="col-12 mt-3 mb-3 tra-tab">
                    <p>
                      <strong>
                        For more details on the status of your booking call on{" "}
                        {phoneNumber} or email at {contactEmail}
                      </strong>
                      <br />
                      <p>&quot;Descubra nuestras tarifas exclusivas llamando al número no publicado. ¡Llame ahora! <br></br><strong className="blink bking">{phoneNumber}</strong>&quot;</p>
                    </p>
                  </div>
                  <p>
                    Please take a moment to review the summary of your booking.
                    It is in process and after making all procedural checks,
                    tickets will be emailed to you shortly.
                  </p>
                  <p>
                    Kindly note, this is an acknowledgment of your booking
                    request and not your E-Ticket. We may ask you for additional
                    information to verify the legitimacy of payment or if it
                    does not satisfy the security parameters, we reserve the
                    right to refuse the booking.
                  </p>
                  <p>
                    We hope you have a pleasant flight and look forward to
                    assisting you again!
                  </p>
                  <p>
                    Note: Fares are not guaranteed until ticketed. In the rare
                    event of unavailability of seats with the Airline Carrier,
                    you may receive correspondence from our Travel Specialists.
                  </p>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6">
                    <h4>Flight Details</h4>
                  </div>
                </div>
                {flightBookingDetails?.flightDetails && (
                  <div className="col-12 mt-3 flight-box p-2 pb-0 mb-4">
                    <div className="row p-3 pb-0">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                        {flightBookingDetails?.flightDetails?.itineraries.map(
                          (itinerary, i) => (
                            <div key={i} className="row expend mb-4">
                              <div className="col-12">
                                <h6>{i === 0 && "Flight Details"}</h6>
                                <p>
                                  <strong>
                                    {i === 0 && (
                                      <span>
                                        <span className="float-start">
                                          <LazyImage
                                            src="/departures.png"
                                            className="img-fluid"
                                          />
                                        </span>
                                        &nbsp;&nbsp;Depart&nbsp;&nbsp;
                                      </span>
                                    )}
                                    {i === 1 && (
                                      <span>
                                        <span className="float-start">
                                          <LazyImage
                                            src="/arrivals.png"
                                            className="img-fluid"
                                          />
                                        </span>
                                        &nbsp;&nbsp;Return&nbsp;&nbsp;
                                      </span>
                                    )}
                                    {formatFullDate(
                                      itinerary?.segments?.[0]?.departure?.at
                                    )}
                                  </strong>
                                  <span className="float-end">
                                    <strong>
                                      Total Trip Duration:{" "}
                                      <i className="far fa-clock"></i>{" "}
                                      {itinerary?.duration?.replace("PT", "")}
                                    </strong>
                                  </span>
                                </p>
                              </div>
                              {itinerary?.segments?.map((segment, m) => (
                                <React.Fragment key={m}>
                                  <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                    <span className="float-start">
                                      <LazyImage
                                        src={`/${segment.carrierName}.png`}
                                        className="img-fluid"
                                      />
                                    </span>
                                    <span className="float-start">
                                      {segment?.carrierName}
                                      <br />
                                      Airlines
                                      <br />
                                      {`${segment?.carrierCode}-${segment?.number}`}
                                    </span>
                                    <div className="col-12 mb-2 cabin-box">
                                      <ul>
                                        <li>
                                          <strong>Duration: </strong>{" "}
                                          <i className="far fa-clock"></i>{" "}
                                          {segment?.duration?.replace("PT", "")}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                                    <div className="row">
                                      <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                        <div className="airport-name">
                                          {formatFullDate(
                                            segment?.departure?.at
                                          )}
                                        </div>
                                      </div>
                                      <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                        <div className="flight-time">
                                          {formatTime(segment?.departure?.at)}
                                        </div>
                                        <div className="trip-duration">
                                          {segment?.departure?.iataCode}
                                        </div>
                                      </div>
                                      <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-start">
                                        <div className="flight-time">
                                          {formatTime(segment.arrival.at)}
                                        </div>
                                        <div className="trip-duration">
                                          {segment?.arrival?.iataCode}
                                        </div>
                                      </div>
                                      <div className="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-end">
                                        <div className="airport-name">
                                          {formatFullDate(segment?.arrival?.at)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col-12">
                    <h4>Passenger Details</h4>
                  </div>
                </div>
                <div className="col-12 mt-3 protection-box p-3 mb-4">
                  <div className="row">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Date of Birth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {flightBookingDetails?.passengers?.map(
                          (passenger, index) => (
                            <tr key={index}>
                              <td>
                                {passenger?.title} {passenger?.firstName}{" "}
                                {passenger?.middleName
                                  ? ` ${passenger?.middleName}`
                                  : ""}{" "}
                                {passenger?.lastName}
                              </td>
                              <td>{passenger?.gender}</td>
                              <td>{passenger?.dateOfBirth}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4>Contact Details</h4>
                  </div>
                </div>
                <div className="col-12 mt-3 protection-box p-3 mb-4">
                  <div className="row">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Mobile</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{`${flightBookingDetails?.travellerInformation?.firstName} ${flightBookingDetails?.travellerInformation?.lastName}`}</td>
                          <td>
                            {flightBookingDetails?.travellerInformation?.email}
                          </td>
                          <td>
                            {flightBookingDetails?.travellerInformation?.mobile}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 mt-3 protection-box p-3 mb-4">
                  <div className="row">
                    <h3>Important Information</h3>
                    <ul>
                      <li>Please check the flight information.</li>
                      <li>
                        All Tickets are Non-refundable, Non-changeable and
                        Non-transferable unless otherwise specified.
                      </li>
                      <li>
                        This trip is priced with fare which is limited in
                        availability and cannot be guaranteed unless paid and a
                        ticket issued from the airline inventory. Any change (if
                        any) will be informed before further processing.
                      </li>
                      <li>
                        Travelling with children: Any child 12 years of age and
                        under may be regarded as a minor and therefore
                        restricted from traveling on their own. Each airline has
                        specific regulations regarding unaccompanied minors.
                        Please contact Customer Services or check with the
                        relevant airline to discuss special arrangements for
                        children traveling alone. Please note children under the
                        age of 2 years on the date of travel do not have a
                        separate seat and are required to sit in accompanying
                        adult&apos;s lap.
                      </li>
                      <li>
                        Special Assistance: Requests for special assistance,
                        preferred meals, and frequent flyer credit will be
                        registered with the airline; however, this is on a
                        request basis only. The airline may not offer the
                        service on the selected flights or, for operational
                        reasons, may not be able to fulfill the request. Should
                        you be taking oversized equipment (skis, snowboards,
                        golf clubs, etc.) or excess baggage on a flight, please
                        contact Customer Services to verify additional charges
                        prior to the completion of your booking.
                      </li>
                      <li>
                        Baggage: There are fares where only hand baggage is
                        allowed and your price does not include any free
                        check-in baggage allowance. Please check your baggage
                        allowance (printed in E ticket) prior to arrival at the
                        airport as additional charges will apply, which can be
                        significantly higher at the airport. Baggage can be
                        pre-booked through our customer support or airline
                        website for an additional charge. We recommend that you
                        always check-in online prior to arrival at the airport
                        to avoid any additional charges.
                      </li>
                      <li>
                        Visa and health regulations: You must make sure that you
                        are fully aware of any visa, health, or other
                        country-specific information which may relate to your
                        destination.
                      </li>
                      <li>
                        Please always check your flight timings with airlines at
                        least 72 hrs before departure.
                      </li>
                      <li>
                        In case of any changes or further information kindly
                        contact on <strong>{phoneNumber}</strong> /{" "}
                        <strong>{contactEmail}</strong>.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3 pt-4 pb-4 box-right">
                <h6>Fare Summary</h6>
                <p>
                  {flightBookingDetails?.travellerPriceObject?.adults?.count}{" "}
                  Adult |{" "}
                  {flightBookingDetails?.travellerPriceObject?.children?.count}{" "}
                  Child |{" "}
                  {flightBookingDetails?.travellerPriceObject?.infants?.count}{" "}
                  Infant{" "}
                </p>
                <hr />
                <div className="form-check pl-0">
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      <strong>Base fare</strong>
                    </span>
                    <span className="float-end fare-text">
                      <strong>
                        $ {flightBookingDetails?.flightDetails?.price?.base}{" "}
                      </strong>
                    </span>
                  </label>
                  <label
                    className="form-check-label"
                    htmlFor="nonstop"
                    style={{
                      display: flightBookingDetails?.travellerPriceObject
                        ?.adults?.count
                        ? "block"
                        : "none",
                    }}
                  >
                    <span className="float-start fare-text">
                      Adult (
                      {
                        flightBookingDetails?.travellerPriceObject?.adults
                          ?.count
                      }{" "}
                      ×{" "}
                      {
                        flightBookingDetails?.travellerPriceObject?.adults
                          ?.basePrice
                      }
                      )
                    </span>
                    <span className="float-end fare-text">
                      {flightBookingDetails?.travellerPriceObject?.adults
                        ?.count *
                        flightBookingDetails?.travellerPriceObject?.adults
                          ?.basePrice}
                    </span>
                  </label>
                  <label
                    className="form-check-label"
                    htmlFor="nonstop"
                    style={{
                      display: flightBookingDetails?.travellerPriceObject
                        ?.children?.count
                        ? "block"
                        : "none",
                    }}
                  >
                    <span className="float-start fare-text">
                      Child (
                      {
                        flightBookingDetails?.travellerPriceObject?.children
                          .count
                      }{" "}
                      ×{" "}
                      {
                        flightBookingDetails?.travellerPriceObject?.children
                          ?.basePrice
                      }
                      )
                    </span>
                    <span className="float-end fare-text">
                      {flightBookingDetails?.travellerPriceObject?.children
                        ?.count *
                        flightBookingDetails?.travellerPriceObject?.children
                          ?.basePrice}
                    </span>
                  </label>
                  <label
                    className="form-check-label"
                    htmlFor="nonstop"
                    style={{
                      display: flightBookingDetails?.travellerPriceObject
                        ?.infants?.count
                        ? "block"
                        : "none",
                    }}
                  >
                    <span className="float-start fare-text">
                      Infant (
                      {
                        flightBookingDetails?.travellerPriceObject?.infants
                          ?.count
                      }{" "}
                      ×{" "}
                      {
                        flightBookingDetails?.travellerPriceObject?.infants
                          ?.basePrice
                      }
                      )
                    </span>
                    <span className="float-end fare-text">
                      {flightBookingDetails?.travellerPriceObject?.infants
                        ?.count *
                        flightBookingDetails?.travellerPriceObject?.infants
                          ?.basePrice}
                    </span>
                  </label>
                </div>
                <hr />
                <div className="form-check pl-0">
                  <label className="form-check-label" htmlFor="nonstop">
                    <span className="float-start fare-text">
                      <strong>Taxes & Fees</strong>
                    </span>
                    <span className="float-end fare-text">
                      <strong>
                        ${" "}
                        {flightBookingDetails?.flightDetails?.price?.taxAndFees}
                      </strong>
                    </span>
                  </label>
                  <label
                    className="form-check-label"
                    htmlFor="nonstop"
                    style={{
                      display: flightBookingDetails?.travellerPriceObject
                        ?.adults.count
                        ? "block"
                        : "none",
                    }}
                  >
                    <span className="float-start fare-text">
                      Adult (
                      {
                        flightBookingDetails?.travellerPriceObject?.adults
                          ?.count
                      }{" "}
                      ×{" "}
                      {
                        flightBookingDetails?.travellerPriceObject?.adults
                          ?.taxAndfees
                      }
                      )
                    </span>
                    <span className="float-end fare-text">
                      {flightBookingDetails?.travellerPriceObject?.adults
                        ?.count *
                        flightBookingDetails?.travellerPriceObject?.adults
                          ?.taxAndfees}
                    </span>
                  </label>
                  <label
                    className="form-check-label"
                    htmlFor="nonstop"
                    style={{
                      display: flightBookingDetails?.travellerPriceObject
                        ?.children?.count
                        ? "block"
                        : "none",
                    }}
                  >
                    <span className="float-start fare-text">
                      Child (
                      {
                        flightBookingDetails?.travellerPriceObject?.children
                          ?.count
                      }{" "}
                      ×{" "}
                      {
                        flightBookingDetails?.travellerPriceObject?.children
                          ?.taxAndfees
                      }
                      )
                    </span>
                    <span className="float-end fare-text">
                      {flightBookingDetails?.travellerPriceObject?.children
                        ?.count *
                        flightBookingDetails?.travellerPriceObject?.children
                          ?.taxAndfees}
                    </span>
                  </label>
                  <label
                    className="form-check-label"
                    htmlFor="nonstop"
                    style={{
                      display: flightBookingDetails?.travellerPriceObject
                        ?.infants?.count
                        ? "block"
                        : "none",
                    }}
                  >
                    <span className="float-start fare-text">
                      Infant (
                      {
                        flightBookingDetails?.travellerPriceObject?.infants
                          ?.count
                      }{" "}
                      ×{" "}
                      {
                        flightBookingDetails?.travellerPriceObject?.infants
                          ?.taxAndfees
                      }
                      )
                    </span>
                    <span className="float-end fare-text">
                      {flightBookingDetails?.travellerPriceObject?.infants
                        ?.count *
                        flightBookingDetails?.travellerPriceObject?.infants
                          ?.taxAndfees}
                    </span>
                  </label>
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" htmlFor="onestop">
                    <span className="float-start fare-total">
                      <strong>Total Price:</strong>
                    </span>
                    <span className="float-end fare-total">
                      <strong>
                        ${" "}
                        {flightBookingDetails?.flightDetails?.price?.grandTotal}
                      </strong>
                    </span>
                  </label>
                </div>
                <hr />
              </div>
            </div>
          </div>
        )}

        {!flightBookingDetails && (
          <div className="container-xl noresult-main">
            <div className="col-sm-12 mt-5 pb-4 text-center">
              <LazyImage src="/not-found.png" className="img-fluid" alt="" />
              <h4 className="mt-4">No result found</h4>
              <p className="mb-0">
                We’ve searched more than 250 airlines that we sell,
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
    </>
  );
};

export default Confirmation;
