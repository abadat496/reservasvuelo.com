import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AutoCompleteInput from "../ui/Autocomplete";
import ClassSelection from "../ui/ClassSelection";
import { useData } from "@/utils/DataContext";
import { getFlightDetails } from "@/service/api";
import { getLanguage } from "@/getLang";
import { phoneNumber } from "@/constant/headerConstant";

const SearchForm = ({
  reset,
  title,
  airlineDetail,
  backGroundImage,
  showtab = false,
}) => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(!showtab ? true : false);
  const today = new Date().toISOString().split("T")[0];

  const {
    updateFormData,
    formValues,
    updateSearchResult,
    setLoading,
    resetFormData,
  } = useData();

  const [formData, setFormData] = useState(formValues);
  const [isValid, setIsValid] = useState(true);
  const [width, setWidth] = useState(0);

  const handleChange = (e) => {
    setIsValid(true);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelect = (value, name) => {
    setIsValid(true);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    updateFormData(formData);

    try {
      const {
        origin,
        destination,
        departDate,
        returnDate,
        adults,
        children,
        infants,
        tripType,
      } = formData;

      if (
        !origin ||
        !destination ||
        !departDate ||
        (tripType === "roundTrip" && (!returnDate || returnDate < departDate))
      ) {
        setIsValid(false);
        return;
      }

      setLoading(true);

      const flightDetailsParams = {
        origin: origin?.split("~")?.[0]?.trim() || null,
        destination: destination?.split("~")?.[0]?.trim() || null,
        departDate: departDate ? encodeURIComponent(departDate) : null,
        adults,
        children,
        infants,
        returnDate:
          returnDate && tripType === "roundTrip"
            ? encodeURIComponent(returnDate)
            : null,
      };

      const airline = airlineDetail;

      const response = await getFlightDetails(flightDetailsParams, airline);
      setShowForm(!showtab ? true : false);
      updateSearchResult(response);
    } catch (error) {
      updateSearchResult([]);
    }
    router.push("/search-result");
    setLoading(false);
  };

  useEffect(() => {
    if (reset) {
      resetFormData();
    }
  }, [reset]);

  useEffect(() => {
    if (formValues) {
      setFormData(formValues);
    }
  }, [formValues]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [langData, setLangData] = useState(null);

  useEffect(() => {
    const getLang = async () => {
      const json = await getLanguage("es");
      setLangData(json);
    };
    getLang();
  }, []);

  return (
    <>
      <div
        className="container-fluid banner-bg"
        style={{ backgroundImage: `url(${backGroundImage})` }}
      >
        <div className="container searh-engain">
          <div className="row">
            <div className="marg-top">
              <h1>
                {title ||
                  "Millones de vuelos baratos. Una simple búsqueda."}
              </h1>
              {/* <h4 className="mt-3 mb-3">Disfrute de reservas sin problemas con Cleartrip</h4> */}
              
            </div>

            {showtab && width < 768 && (
              <div className="col-12 filter2" onClick={toggleForm}>
                
                  {" "}
                  <span>Modify Your Search</span>{" "}
                  <i
                    className={`${
                      showForm ? "fa fa-chevron-up" : "fa fa-chevron-down"
                    }`}
                    aria-hidden="true"
                  ></i>
                
              </div>
            )}

            <div
              className="tab-content"
              style={{
                display: `${showForm || width > 767 ? "block" : "none"}`,
              }}
            >
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="form-check form-check-inline mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    value="roundTrip"
                    checked={formData.tripType === "roundTrip"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="roundTrip">
                    {langData?.roundTrip}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    value="oneWay"
                    checked={formData.tripType === "oneWay"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="oneWay">
                  {langData?.oneWay}
                  </label>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-4 col-lg-2 col-xl-2 p-1">
                    <label>{langData?.fromAirport}</label>
                    <div className="input-group">
                    <div className="icon3"><img
                        classNameName=""
                        id=""
                        alt=""
                        src={`/take-off.png`}
                      /></div>
                      <AutoCompleteInput
                        name="origin"
                        placeholder={langData?.flyingFrom}
                        value={formValues.origin}
                        onSelect={(val) => handleSelect(val, "origin")}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 col-lg-2 col-xl-2 p-1">
                    <label>{langData?.toAirport}</label>
                    <div className="input-group">
                    <div className="icon3"><img
                        classNameName=""
                        id=""
                        alt=""
                        src={`/landing.png`}
                      /></div>
                      <AutoCompleteInput
                        name="destination"
                        value={formValues.destination}
                        placeholder={langData?.flyingTo}
                        onSelect={(val) => handleSelect(val, "destination")}
                      />
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2 col-xl-2 p-1">
                    <label>{langData?.departureDate}</label>
                    <div className="input-group">
                    <div className="icon3"><img
                        classNameName=""
                        id=""
                        alt=""
                        src={`/appointment.png`}
                      /></div>
                    <input
                      type="date"
                      className="form-control"
                      name="departDate"
                      value={formData.departDate}
                      onChange={handleChange}
                      min={today}
                    />
                  </div>
                  </div>
                  {formData.tripType === "roundTrip" && (
                    <div className="col-6 col-sm-4 col-lg-2 col-xl-2 p-1">
                      <label>{langData?.returnDate}</label>
                      <div className="input-group">
                    <div className="icon3"><img
                        classNameName=""
                        id=""
                        alt=""
                        src={`/appointment.png`}
                      /></div>
                      <input
                        type="date"
                        className="form-control"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        min={formData.departDate}
                      />
                    </div>
                    </div>
                  )}
                  <div className="col-12 col-sm-4 col-lg-2 col-xl-2 p-1">
                    <label>{langData?.addTravelers}</label>
                    <div className="dropdown">
                    <div className="icon3"><img
                        classNameName=""
                        id=""
                        alt=""
                        src={`/seat.png`}
                      /></div>
                      <ClassSelection
                        onSelectClass={(key, val) => handleSelect(val, key)}
                        onChangePassengers={(key, val) =>
                          handleSelect(val, key)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 col-lg-2 col-xl-2 d-grid gap-2 p-1">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleSubmit}
                    >
                     BUSCAR VUELOS 
                    </button>
                  </div>
                </div>
                {!isValid && (
                  <div className="text-danger">
                   {langData?.errormsg}
                  </div>
                )}
              </div>
            </div>

           

          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
