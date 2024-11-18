import React from "react";
import Link from "next/link";

const Breadcrumb = ({ title }) => {
  return (
    <div className="container-fluid title-bg">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <h2>
              <em>{title}</em>
            </h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>/</li>
              <li className="active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
