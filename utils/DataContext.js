import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [showUndercutting, setShowUndercutting] = useState(false);
  const [newSearch, setNewSearch] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [plainData, setPlainData] = useState([]);
  const [selectedAirline, setSelectedAirline] = useState(null);
  const [formValues, setFormValues] = useState({
    tripType: "roundTrip",
    origin: "",
    destination: "",
    startDate: "",
    returnDate: "",
    cabinClass: "Economy",
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [bookingDetails, setBookingDetails] = useState(null);

  const updateBookingDetail = (newData) => {
    setBookingDetails(newData);
  };

  const updateSearchResult = (newData) => {
    setSearchData(newData);
    setNewSearch(true);
  };

  const updateSelectedAirline = (newData) => {
    setSelectedAirline(newData);
  };

  const updateFormData = (newData) => {
    setFormValues(newData);
  };

  const resetFormData = () => {
    setFormValues({
      tripType: "roundTrip",
      origin: "",
      destination: "",
      startDate: "",
      returnDate: "",
      cabinClass: "Economy",
      adults: 1,
      children: 0,
      infants: 0,
    });
    setSearchData([]);
  };

  const setLoading = (isLoading) => {
    setIsSearching(isLoading);
  };

  const setUndercuttingBanner = (status) => {
    setShowUndercutting(status);
  };

  const newSearchOff = () => {
    setNewSearch(false);
  };

  const updatePlainData = (data) => {
    setPlainData(data);
  };
  

  return (
    <DataContext.Provider
      value={{
        searchData,
        updateSearchResult,
        selectedAirline,
        updateSelectedAirline,
        formValues,
        updateFormData,
        isSearching,
        setLoading,
        resetFormData,
        bookingDetails,
        updateBookingDetail,
        setUndercuttingBanner,
        showUndercutting,
        newSearchOff,
        newSearch,
        plainData,
        updatePlainData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
