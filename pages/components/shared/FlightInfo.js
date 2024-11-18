import React from "react";

const FlightInfo = ({ data }) => {
  return (
    <>
      <h2>{data?.title}</h2>
      <p className="mb-4">{data?.description}</p>
      {data?.sections?.length &&
        data?.sections.map((sec, i) => (
          <React.Fragment key={i}>
            <h4>{sec?.title}</h4>
            <p>{sec?.description}</p>
            {sec?.subsections?.length &&
              sec?.subsections.map((subsec, j) => (
                <React.Fragment key={j}>
                  <strong>{subsec?.title}</strong>
                  <p>{subsec?.description}</p>
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}
    </>
  );
};

export default FlightInfo;
