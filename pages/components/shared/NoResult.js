import React from "react";
import Link from "next/link";

import { phoneNumber } from "@/constant/headerConstant";
import { useData } from "@/utils/DataContext";
import LazyImage from "../ui/LazyImage";

const NoResult = () => {
  const { formValues } = useData();

  return (
    <div className="container-xl pt-5 noresult-main">
      <div className="col-sm-12 mt-5 pb-4 text-center">
        <LazyImage src="/not-found.png" className="img-fluid" alt="Not Found" />
        <h4 className="mt-4">No result found</h4>
        <p className="mb-0">
          We&apos;ve searched more than 400 airlines that we sell,
          <br />
          and couldn&apos;t find any flights from{" "}
          <strong>{formValues?.origin}</strong> to{" "}
          <strong>{formValues?.origin}</strong>
        </p>
        <hr />
        <h6>Call us at (24x7)</h6>
        <h2>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </h2>
        <button type="button" className="btn btn-outline-primary mt-3">
          <Link href="/">
            <i className="fa fa-angle-left" aria-hidden="true"></i> Go Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NoResult;
