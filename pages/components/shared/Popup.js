import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { phoneNumber, popupImage } from "@/constant/headerConstant";
import { flights } from "@/constant/flight";
import LazyImage from "../ui/LazyImage";

const Popup = () => {
  const [hide, setHide] = useState(true);
  const handleClose = () => setHide(true);
  const [width, setWidth] = useState(0);

  const router = useRouter();
  const { query } = router;

  const [airlineDetail, setAirlineDetail] = useState(null);

  useEffect(() => {
    if (query && query?.airline) {
      const airline = flights.find((a) => a.rout === query?.airline);
      console.log(airline)
      setAirlineDetail(airline);
      if (!airline || !airline?.iataCode) {
        setHide(true)
      } else {setHide(false)
      }
      
    } else {
      setHide(true);
    }
  }, [query]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pupupnone">
      <div
        className="modal fade show"
        aria-modal="true"
        style={{ display: hide || width > 767 ? "none" : "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <Link href={`tel:${phoneNumber}`}>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={handleClose}
              >
                X
              </button>
            </Link>
            <div className="modal-body class-modal">
              <div className="pop-up-new-sec">
                <section className="banner-view2">
                  <a href={`tel:${phoneNumber}`}>
                    <div className="container">
                      <div className="col-md-4 bg_dark_box pop-up-content-box">
                        {airlineDetail?.rout && (
                          <LazyImage
                            className="logo-img"
                            alt="logo"
                            src={`/${airlineDetail?.rout}-logo.png`}
                            layout="responsive"
                          />
                        )}
                        <h1> 24/7 reservations &amp; support </h1>
                        <ul className="list-view-items">
                          <li> Tickets Booking </li>
                          <li> Manage Booking </li>
                          <li> Cancellation </li>
                          <li> Customer Service </li>
                          <li> Changes </li>
                        </ul>
                        {airlineDetail?.rout && (
                          <LazyImage
                            className="plane-image"
                            alt="plane"
                            src={`/${airlineDetail?.rout}.jpg`}
                            layout="responsive"
                          />
                        )}
                        <LazyImage
                          className="calling-cus-img"
                          src={popupImage}
                          alt="calling-cus"
                        />
                        <div className="exbt_cl">
                          <h5>
                            <i className="fa-solid fa-phone-volume"></i>
                            <span> Phone Only Offers </span>
                            {phoneNumber}
                          </h5>
                          <h3> Call Answer in Seconds</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
