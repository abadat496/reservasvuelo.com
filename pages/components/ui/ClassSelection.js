import React, { useState, useEffect, useRef } from "react";

const ClassSelection = ({ onSelectClass = {}, onChangePassengers = {} }) => {
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClassSelect = (selected) => {
    setSelectedClass(selected);
    onSelectClass("cabinClass", selected);
    setShowDropdown(false);
  };

  const handlePassengerChange = (type, value) => {
    if (value > 10) return;
    switch (type) {
      case "adults":
        setAdults(value);
        break;
      case "children":
        setChildren(value);
        break;
      case "infants":
        setInfants(value);
        break;
      default:
        break;
    }
    onChangePassengers(type, value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="class-selection-container">
      <div className="input-group" ref={dropdownRef}>
        <input
          type="text"
          value={`${selectedClass} - Adults: ${adults} - Children: ${children}`}
          onClick={() => setShowDropdown(!showDropdown)}
          readOnly
          className="form-control"
          style={{ borderRadius: 5 }}
        />
        {showDropdown && (
          <div className="autocomplete-list">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selectedClass}
              </button>
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => handleClassSelect("Economy")}
                >
                  Economy
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleClassSelect("Premium Economy ")}
                >
                  Premium Economy
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleClassSelect(" Business Class ")}
                >
                  Business Class
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleClassSelect(" First class ")}
                >
                  First class
                </button>
              </div>
            </div>
            <ul className="passenger-list p-2">
              <li className="d-flex justify-content-between align-items-center">
                <span className="passenger-label">Adults</span>
                <div className="passenger-controls">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handlePassengerChange("adults", adults + 1)}
                  >
                    +
                  </button>
                  <span className="count">{adults}</span>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      handlePassengerChange("adults", Math.max(adults - 1, 1))
                    }
                  >
                    -
                  </button>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center mt-2">
                <span className="passenger-label">Children</span>
                <div className="passenger-controls">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      handlePassengerChange("children", children + 1)
                    }
                  >
                    +
                  </button>
                  <span className="count">{children}</span>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      handlePassengerChange(
                        "children",
                        Math.max(children - 1, 0)
                      )
                    }
                  >
                    -
                  </button>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center mt-2">
                <span className="passenger-label">Infants</span>
                <div className="passenger-controls">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      handlePassengerChange("infants", infants + 1)
                    }
                  >
                    +
                  </button>
                  <span className="count">{infants}</span>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      handlePassengerChange("infants", Math.max(infants - 1, 0))
                    }
                  >
                    -
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassSelection;
