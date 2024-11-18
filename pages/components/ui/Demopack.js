import React from "react";

const Demopack = () => {
  return (
    <div className="row align-items-center">
      <div className="col-8 col-sm-8 col-lg-8 col-xl-8">
        <p className="date mb-0">Tue, Jan 31, 2023 - Thu, Feb 02, 2023</p>
        <p className="aircode mb-0">
          San Francisco <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
          Las Vegas
        </p>
      </div>
      <div className="col-4 col-sm-4 col-lg-4 col-xl-4 bordpri">
        <span className="fromright">From</span>{" "}
        <span className="airprice">$35.46</span>
        <p className="peraduit mb-0">RoundTrip</p>
      </div>
    </div>
  );
};

export default Demopack;
