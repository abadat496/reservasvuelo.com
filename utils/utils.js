export const carrierWithName = (carriers) => {
  let airlines = [];
  try {
    for (const carrier in carriers) {
      if (Object.hasOwnProperty.call(carriers, carrier)) {
        airlines.push({
          code: carrier,
          name: carriers[carrier]
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" "),
        });
      }
    }
  } catch (e) {
    console.error("utilts19", e?.message);
  }
  return airlines;
};

export const updatedAirlinetData = (airlinesData = [], careers) => {
  try {
    for (let flight of airlinesData) {
      flight["carrierCodes"] = [];
      flight["stops"] = [];
      for (let itineraries of flight.itineraries) {
        for (let segment of itineraries.segments) {
          segment["carrierName"] = careers
            .find((item) => item.code === segment.carrierCode)
            .name.split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");

          flight["carrierCodes"].push(segment.carrierCode);
          flight["stops"].push(segment.numberOfStops);
        }
      }
      flight["showFlightDetails"] = false;
    }
  } catch (e) {
    console.error("utilts", e?.message);
  }

  return airlinesData;
};

export const formatTime = (time) => {
  const newTime = new Date(time);
  if (isNaN(newTime.getTime())) {
    return "";
  }
  return newTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatFullDate = (dateTime) => {
  const newDateTime = new Date(dateTime);
  if (isNaN(newDateTime.getTime())) {
    return "";
  }

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return newDateTime.toLocaleString("en-US", options);
};

export const isFormValid = (
  cardInformation,
  travellerInformation,
  passengers = []
) => {
  const isCardInfoValid =
    cardInformation?.cardNumber &&
    cardInformation?.nameOnCard &&
    cardInformation?.expiryMonth &&
    cardInformation?.expiryYear &&
    cardInformation?.cvv;

  const isTravellerInfoValid =
    travellerInformation?.firstName &&
    travellerInformation?.lastName &&
    travellerInformation?.email &&
    travellerInformation?.mobile;

  const arePassengersValid = passengers.every(
    (passenger) =>
      passenger?.title &&
      passenger?.firstName &&
      passenger?.lastName &&
      passenger?.gender &&
      passenger?.dateOfBirth
  );

  return isCardInfoValid && isTravellerInfoValid && arePassengersValid;
};

export const generateRandomWord = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomWord = "";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomWord += characters.charAt(randomIndex);
  }

  return randomWord;

  
};

export const generateRandomNumber = () => {
  const characters = "1234567890";
  let randomWord = "";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomWord += characters.charAt(randomIndex);
  }

  return randomWord;
};

