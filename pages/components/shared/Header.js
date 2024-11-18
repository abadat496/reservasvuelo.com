import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  callIcon,
  logoMobileImage,
  phoneNumber,
} from "@/constant/headerConstant";
import LazyImage from "../ui/LazyImage";
import MobileSection from "./MobileHeader";

const Header = ({ langData }) => {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const { query } = router;

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

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

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <>
      <div
        style={{
          display: `${width > 767 || !query?.airline ? "none" : "block"}`,
        }}
      >
        <MobileSection langData={langData} />
      </div>
      <header
        style={{
          display: `${width > 767 || !query?.airline ? "block" : "none"}`,
        }}
      >
        {/* <div className="fixed call-bg d-block d-md-block d-lg-none">
        <Link href={`tel:${phoneNumber}`} >
          <p>Llama ahora</p>
          <h4> {phoneNumber}</h4>
        </Link>
      </div> */}
        <nav
          className="navbar navbar-expand-lg navbar-light bg-white"
          aria-label="Eleventh navbar example"
        >
          <div className="container">
            <Link href="/" className="navbar-brand">
              <LazyImage
                src={`/${logoMobileImage}.png`}
                className="img-fluid"
                alt="Logo"
                imageSizes={32}
                width={260}
                height={55}
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse flex-grow-1 text-right ${
                isMenuCollapsed ? "collapse" : ""
              }`}
              id="navbarsExample09"
            >
              <ul className="navbar-nav ms-auto flex-nowrap">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.pathname === "/" && "active"
                    }`}
                    aria-current="page"
                    href={"/"}
                    onClick={toggleMenu}
                  >
                    {" "}
                    Hogar
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.pathname === "/about-us" && "active"
                    }`}
                    href={"about-us"}
                    onClick={toggleMenu}
                  >
                    {" "}
                    Acerca de
                  </Link>
                </li>

                {/* <li className="nav-item dropdown">
                  <Link
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={`dropdown-toggle nav-link ${
                      (router.pathname === "/domestic" ||
                        router.pathname === "/international") &&
                      "active"
                    }`}
                  >
                    {" "}
                    Major Airlines
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdown09">
                    <li>
                      <Link className="dropdown-item" href="domestic" onClick={toggleMenu}>
                       {" "}
                        Domestic
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="international" onClick={toggleMenu}>
                        {" "}
                        International
                      </Link>
                    </li>
                  </ul>
                </li> */}

                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.pathname === "/privacy-policy" && "active"
                    }`}
                    href={"privacy-policy"}
                    onClick={toggleMenu}
                  >
                    Política de privacidad
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.pathname === "/contact-us" && "active"
                    }`}
                    href={"contact-us"}
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>

              <div className="pull-right phone-number d-lg-block">
                <ul>
                  <li className="blink">
                    <LazyImage
                      width={50}
                      height={50}
                      imageSizes={16}
                      src="/call.png"
                    />
                  </li>
                  <li>
                    <h5>
                      <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                    </h5>
                    <p>Disponible ahora</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
