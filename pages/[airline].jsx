import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchForm from "./components/shared/Searchform";
import FlightInfo from "./components/shared/FlightInfo";
import { airlinesDetails } from "@/constant/flightinfo";
import Head from "next/head";

const DynamicPage = () => {
  const router = useRouter();
  const { airline } = router.query;

  const [airlineDetail, setAirlineDetail] = useState(null);

  useEffect(() => {
    if (airline && airline.trim().length) {
      const selectedAirline = airlinesDetails[airline];
      setAirlineDetail(selectedAirline);
    }
  }, [airline]);

  return (
    <>
      <Head>
        <title>{airlineDetail?.title}</title>
      </Head>
      <SearchForm
        airlineDetail={airlineDetail}
        backGroundImage={`/domestic-img.jpg`}
        title={airlineDetail?.title}
      />
      <div className="container">
        <div className="col-12 mt-5 inner-page">
          <FlightInfo data={airlineDetail} />
        </div>
      </div>
    </>
  );
};

export default DynamicPage;
