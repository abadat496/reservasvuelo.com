import React, { useEffect, useState } from "react";
import Head from "next/head";
import SearchForm from "./components/shared/Searchform";
import NoResult from "./components/shared/NoResult";
import FlightBox from "./components/shared/FlightBox";
import Undercuttingbanner from "./components/shared/Undercuttingbanner";
import { useData } from "../utils/DataContext";

const Search = () => {
  const [searches, setSearches] = useState(null);

  const { searchData, setUndercuttingBanner, newSearch } = useData();

  useEffect(() => {
    if (searches && searches?.data?.length && newSearch) {
      setTimeout(() => {
        setUndercuttingBanner(true);
      }, 7000);
    }
  }, [searches]);

  useEffect(() => {
    setSearches(searchData);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchData]);

  return (
    <>
      <Head>
        <title>Search Result</title>
      </Head>
      <SearchForm showtab={true} backGroundImage={"/slider.jpg"} />
      {searches && searches?.data?.length ? (
        <div className="container-fluid">
          <div className="row">
            <FlightBox searches={searches} />
            {/* <Undercuttingbanner /> */}
          </div>
        </div>
      ) : (
        <NoResult />
      )}
    </>
  );
};

export default Search;
