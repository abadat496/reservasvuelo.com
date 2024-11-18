import React, { useEffect, useState } from "react";
import LazyImage from "../ui/LazyImage";

const FilterResults = ({ searches = [], careers = [], filterSearch = {} }) => {
  const [prefferAirline, setPrefferAirline] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult(searches);
  }, [searches]);

  useEffect(() => {
    setPrefferAirline(careers);
  }, [careers]);

  return (
    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 pb-4 box-right mt-4">
      <h6>Filter Your Results</h6>
      <p>{searchResult.length || 0} results found</p>
      <hr />
      <h6>Stops</h6>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={(e) => filterSearch(e, "stop", "0")}
        />
        <label className="form-check-label" htmlFor="nonstop">
          <span className="float-start">Non stop</span>
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={(e) => filterSearch(e, "stop", "1")}
        />
        <label className="form-check-label" htmlFor="onestop">
          <span className="float-start">1 stop</span>
        </label>
      </div>
      <hr />
      <div className="range-box">
        <h6>Preferred Airlines</h6>
        {prefferAirline?.map((data, i) => (
          <div key={i} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={(e) => filterSearch(e, "airline", data?.code)}
            />
            <label className="form-check-label" htmlFor={data?.name}>
              <span className="float-start">
                <LazyImage
                  src={`/${data?.name}.png`}
                  className="img-fluid"
                  alt=""
                />
                {data?.name}
              </span>
            </label>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default FilterResults;
