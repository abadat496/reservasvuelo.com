import React from "react";
import { useData } from "@/utils/DataContext";
import LazyImage from "../ui/LazyImage";
import { phoneNumber } from "@/constant/headerConstant";

const SearchModal = () => {
  const { isSearching, formValues } = useData();

  const pacs = (adlts, child, infants) => {
    return (Number(adlts) || 0) + (Number(child) || 0) + (Number(infants) || 0);
  };

  return (
    <div
      className="modal fade show"
      style={{ display: isSearching ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content sear-popup">
          <div className="modal-body py-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 search-top">
                  <div className="row text-center">
                    <div className="col-5 col-sm-5 col-lg-5 col-xl-5">
                      <h6>{formValues?.origin?.split("~")?.[1] || ""}</h6>
                      <h2>{formValues?.origin?.split("~")?.[0] || ""}</h2>
                    </div>
                    <div className="col-2 col-sm-2 col-lg-2 col-xl-2">
                      <div className="search-aero">
                        <i
                          className="fa fa-long-arrow-left"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="search-aero">
                        <i
                          className="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="col-5 col-sm-5 col-lg-5 col-xl-5">
                      <h6>{formValues?.destination?.split("~")?.[1] || ""}</h6>
                      <h2>{formValues?.destination?.split("~")?.[1] || ""}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 search-med text-center">
                  <div className="discountoffer">
                    <h6>Limited time Offer</h6>
                    <h5>Call Now For Exclusive Fares Deals</h5>
                    <br></br>

                    <LazyImage
                      src="/loader.gif"
                      className="img-fluid"
                      width={80}
                      height={80}
                      alt="Loader"
                    />

                    <p>{phoneNumber}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 search-date">
                  <ul>
                    <li>
                      <h6 className="mb-0">Depart</h6>
                      <p className="mb-0">{formValues?.departDate || "-"}</p>
                    </li>
                    <li>
                      <h6 className="mb-0">Return</h6>
                      <p className="mb-0">
                        {formValues?.returnDate &&
                        formValues?.tripType === "roundTrip"
                          ? formValues?.returnDate
                          : "-"}
                      </p>
                    </li>
                    <li>
                      <h6 className="mb-0">Travellers</h6>
                      <p className="mb-0">
                        {pacs(
                          formValues?.adults,
                          formValues?.children,
                          formValues?.infants
                        )}
                        Pax
                      </p>
                    </li>
                    <li>
                      <h6 className="mb-0">Class</h6>
                      <p className="mb-0">{formValues?.cabinClass || "-"}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
