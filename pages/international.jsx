import React from "react";
import Head from "next/head";
import SearchForm from "./components/shared/Searchform";
import Demopack from "./components/ui/Demopack";

const international = () => {
  return (
    <>
      <Head>
        <title>International</title>
      </Head>
      <SearchForm backGroundImage={"/international-img.jpg"} />
      <div className="container-xl pt-5 inner-page">
        <div className="col-sm-12">
          <h2>International Cheap Flights</h2>
          <p>
            Lookbyfare brings you some not-to-be missed deals on airfares that
            are bound to enrich your travel experience. These deals are our
            latest and best we&apos;ve found. Don&apos;t keep waiting. Book them
            now!
          </p>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="domepack">
                <ul>
                  {[1, 2, 3, 4, 5, 6, 7].map((data, i) => (
                    <li key={i}>
                      <Demopack />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xl-6">
              <div className="domepack">
                <ul>
                  {[1, 2, 3, 4, 5, 6, 7].map((data, i) => (
                    <li key={i}>
                      <Demopack />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                <span>Note: All fares are quoted in USD.</span>
                <br />
                Last updated on <span>Wed, Jan 25, 2023 at 05:00 AM.</span>, the
                fares mentioned above are for flight tickets and inclusive of
                taxes & fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default international;
