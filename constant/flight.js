const currentFlights = [
  {
    type: "airline",
    iataCode: "AA",
    icaoCode: "AAL",
    businessName: "AMERICANAIR",
    commonName: "AMERICANAIR",
    rout: "american-airlines",
  },
  {
    type: "airline",
    iataCode: "OZ",
    icaoCode: "AAR",
    businessName: "ASIANA AIRLINES",
    commonName: "ASIANA",
  },
  {
    type: "airline",
    iataCode: "AC",
    icaoCode: "ACA",
    businessName: "AIR CANADA",
    commonName: "AIR CANADA",
  },
  {
    type: "airline",
    iataCode: "AF",
    icaoCode: "AFR",
    businessName: "AIR FRANCE",
    commonName: "AIR FRANCE",
  },
  {
    type: "airline",
    iataCode: "AM",
    icaoCode: "AMX",
    businessName: "AEROMEXICO",
    commonName: "AEROMEXICO",
    rout: "aeromexico-airlines",
  },
  {
    type: "airline",
    iataCode: "AR",
    icaoCode: "ARG",
    businessName: "AEROLINEAS ARGENTINAS",
    commonName: "AEROLINEAS ARGENTINAS",
  },
  {
    type: "airline",
    iataCode: "AS",
    icaoCode: "ASA",
    businessName: "ALASKA AIRLINES",
    commonName: "ALASKA AIRLINES",
  },
  {
    type: "airline",
    iataCode: "B6",
    icaoCode: "JBU",
    businessName: "JETBLUE AIRWAYS",
    commonName: "JETBLUE AIRWAYS",
    rout: "jetblue-airlines"
  },
  {
    type: "airline",
    iataCode: "BA",
    icaoCode: "BAW",
    businessName: "BRITISH AIRWAYS",
    commonName: "BRITISH A/W",
    rout: "british-airlines",
  },
  {
    type: "airline",
    iataCode: "CM",
    icaoCode: "CMP",
    businessName: "COPA AIRLINES",
    commonName: "COPA AIRLINES",
  },
  {
    type: "airline",
    iataCode: "DL",
    icaoCode: "DAL",
    businessName: "DELTA AIR LINES",
    commonName: "DELTA AIRLINES",
  },
  {
    type: "airline",
    iataCode: "EK",
    icaoCode: "UAE",
    businessName: "EMIRATES",
    commonName: "EMIRATES",
    rout: "emirates-airlines",
  },
  {
    type: "airline",
    iataCode: "F9",
    icaoCode: "FFT",
    businessName: "FRONTIER AIRLINES",
    commonName: "FRONTIER AIRLINES",
  },
  {
    type: "airline",
    iataCode: "FI",
    icaoCode: "ICE",
    businessName: "ICELANDAIR",
    commonName: "ICELANDAIR",
  },
  {
    type: "airline",
    iataCode: "G4",
    icaoCode: "AAY",
    businessName: "ALLEGIANT AIR",
    commonName: "ALLEGIANT AIR",
    rout: "allegiant-airlines",

  },
  {
    type: "airline",
    iataCode: "HA",
    icaoCode: "HAL",
    businessName: "HAWAIIAN AIRLINES",
    commonName: "HAWAIIAN AIRLINES",
  },
  {
    type: "airline",
    iataCode: "IB",
    icaoCode: "IBE",
    businessName: "IBERIA",
    commonName: "IBERIA",
  },
  {
    type: "airline",
    iataCode: "KL",
    icaoCode: "KLM",
    businessName: "KLM ROYAL DUTCH AIRLINES",
    commonName: "KLM",
    rout: "klm-airlines",
  },
  {
    type: "airline",
    iataCode: "LA",
    icaoCode: "LAN",
    businessName: "LATAM AIRLINES GROUP",
    commonName: "LATAM AIRLINES GROUP",
  },
  {
    type: "airline",
    iataCode: "LH",
    icaoCode: "DLH",
    businessName: "LUFTHANSA",
    commonName: "LUFTHANSA",
    rout: "lufthansa-airlines",
  },
  {
    type: "airline",
    iataCode: "NK",
    icaoCode: "NKS",
    businessName: "SPIRIT AIRLINES",
    commonName: "SPIRIT AIRLINES",
  },
  {
    type: "airline",
    iataCode: "QR",
    icaoCode: "QTR",
    businessName: "QATAR AIRWAYS",
    commonName: "QATAR AIRWAYS",
  },
  {
    type: "airline",
    iataCode: "SQ",
    icaoCode: "SIA",
    businessName: "SINGAPORE AIRLINES",
    commonName: "SINGAPORE",
  },
  {
    type: "airline",
    iataCode: "SV",
    icaoCode: "SVA",
    businessName: "SAUDI ARABIAN AIRLINES",
    commonName: "SAUDIARABI",
  },
  {
    type: "airline",
    iataCode: "SY",
    icaoCode: "SCX",
    businessName: "SUN COUNTRY",
    commonName: "SUN COUNTRY",
  },
  {
    type: "airline",
    iataCode: "WN",
    icaoCode: "SWA",
    businessName: "SOUTHWEST AIRLINES TEXAS",
    commonName: "SW AIRLINES",
    rout: "southwest-airlines",
  },
  {
    type: "airline",
    iataCode: "TK",
    icaoCode: "THY",
    businessName: "TURKISH AIRLINES",
    commonName: "TURKISH AIRLINES",
  },
  {
    type: "airline",
    iataCode: "UA",
    icaoCode: "UAL",
    businessName: "UNITED AIRLINES",
    commonName: "UNITED AIRLINES",
  },
  {
    type: "airline",
    iataCode: "Y4",
    icaoCode: "VOI",
    businessName: "VOLARIS",
    commonName: "VOLARIS",
  },
  {
    type: "airline",
    iataCode: null,
    icaoCode: "",
    businessName: "Reserva De Aerolíneas",
    commonName: "Reserva De Aerolíneas",
    rout: "reserva-de-aerolíneas",
  },
  {
    type: "airline",
    iataCode: null,
    icaoCode: "VOI",
    businessName: "Airlines Reservation",
    commonName: "airline-reservation",
    rout: "airline-reservation",
  },
];

const addRoutesToFlights = (airlines) => {
  return airlines.map((airline) => {
    const normalizedBusinessName = airline.businessName
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/\s+/g, " ");

    if (!airline?.rout) {
      const addBuisnessRout = airline.businessName
        .toLowerCase()
        .replace(/\s/g, "-");

      return {
        ...airline,
        rout: addBuisnessRout,
        businessName: normalizedBusinessName,
      };
    }
    return {
      ...airline,
      businessName: normalizedBusinessName,
    };
  });
};

export const flights = addRoutesToFlights(currentFlights);
