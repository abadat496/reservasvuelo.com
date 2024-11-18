import React, { useState, useEffect, useRef } from "react";
import { airportsData } from "@/constant/airportsdata";

const AutoCompleteInput = ({
  onSelect = () => {},
  placeholder = "Flying From",
  value = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState(airportsData);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSuggestions(airportsData);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setSuggestions(airportsData);
    } else {
      const filteredSuggestions = airportsData.filter((city) =>
        city.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSelectSuggestion = (selectedSuggestion) => {
    setSearchTerm(
      `${selectedSuggestion.split("~")[0]} - ${
        selectedSuggestion.split("~")[1]
      }`
    );
    onSelect(
      `${selectedSuggestion.split("~")[0]} ~ ${
        selectedSuggestion.split("~")[1]
      }`
    );
    setSuggestions([]);
  };

  useEffect(() => {
    if (value && value.trim().length) {
      const selectedCityCode = value?.split("~")?.[0];
      const selectedCity = airportsData.find(
        (city) =>
          city?.split("~")?.[0].toLowerCase() ===
          selectedCityCode?.trim().toLowerCase()
      );
      if (selectedCity) {
        handleSelectSuggestion(selectedCity);
      }
    }
  }, [value]);

  return (
    <>
      <input
        className="form-control"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{ borderRadius: 5 }}
      />
      {searchTerm && (
        <ul className="autocomplete-list list-group">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              ref={inputRef}
              onClick={() => handleSelectSuggestion(suggestion)}
              className="list-group-item autocomple-option d-flex align-items-center"
            >
              <button
                type="button"
                className="btn btn-outline-primary mx-0 p-2"
              >
                {suggestion.split("~")?.[0]}
              </button>
              <div className="mx-2" style={{ lineHeight: "14px" }}>
                <strong>
                  <small>{suggestion.split("~")[1]}</small>
                </strong>
                <div className="d-block text_nowrap_auto">
                  <small>
                    {suggestion.split("~")[2]}
                    <strong> {suggestion.split("~")[3]}</strong>
                  </small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AutoCompleteInput;
