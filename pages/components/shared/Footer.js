import React, { useEffect, useState } from "react";
import Link from "next/link";
import { callIcon, phoneNumber } from "@/constant/headerConstant";
import LazyImage from "../ui/LazyImage";

const Footer = ({ langData }) => {
  return (
    <>
      <div className="container-fluid footer-bg pb-5 pt-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-12 col-xl-12 top-margin">
              <h6>{langData?.quickLink}</h6>
              <ul>
                {langData?.quickLinks?.map((link, index) => (
                  <li key={index}>
                    <Link href={`${link.path}`}>
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-12 col-xl-12 top-margin">
              <ul>
                <li>
                  <a href={`tel:${phoneNumber}`}>
                    <i className="fa-solid fa-phone-volume"></i> {phoneNumber}
                  </a>
                </li>
                <li>
                  <a href="mailto:info@viajexico.com">
                    <i className="fa-regular fa-envelope"></i>{" "}
                    info@viajexico.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-solid fa-location-dot"></i> HIMANSHU PURI SOLE
                    MBR 48221 NOTTINGHILL LN CANTON, MI 48188
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-12 col-lg-12 col-xl-12 mt-4 top-margin">
              <h6>{langData?.Disclaimer} :</h6>
              <p>
                viajexico.com es un agregador de billetes de avión y conecta a
                viajeros y proveedores. Esto asegura que no tengamos elementos
                distintivos y que hagamos las reservas de viajes de forma más
                sencilla. Lo ayudaremos y lo educaremos en el proceso con
                respecto a encontrar los mejores arreglos para su visita, sin
                embargo, en caso de que haya un defecto en las administraciones
                ofrecidas por el proveedor de soporte, no se espera que asumamos
                la responsabilidad. No corremos el riesgo de ninguna
                tergiversación, error, engaño o exención hecha a ninguna de las
                páginas web o enlaces a diferentes sitios accesibles en
                viajexico.com.
              </p>
            </div>

            <div className="col-12 col-lg-12">
              <div className="payment_icon">
                <ul>
                  <li>
                    <LazyImage
                      src="/icons-p10.png"
                      className="img-fluid"
                      alt=""
                      imageSizes={32}
                      width={50}
                      height={30}
                    />
                  </li>
                  <li>
                    <LazyImage
                      src="/icons-p7.png"
                      className="img-fluid"
                      alt=""
                      imageSizes={32}
                      width={50}
                      height={30}
                    />
                  </li>

                  <li>
                    <LazyImage
                      src="/icons-p11.png"
                      className="img-fluid"
                      alt=""
                      imageSizes={32}
                      width={50}
                      height={30}
                    />
                  </li>

                  <li>
                    <LazyImage
                      src="/icons-p12.png"
                      className="img-fluid"
                      alt=""
                      imageSizes={32}
                      width={50}
                      height={30}
                    />
                  </li>

                  <li>
                    <LazyImage
                      src="/icons-p9.png"
                      className="img-fluid"
                      alt=""
                      imageSizes={32}
                      width={50}
                      height={30}
                    />
                  </li>

                  <li>
                    <LazyImage
                      src="/icons-p8.png"
                      className="img-fluid"
                      alt=""
                      imageSizes={32}
                      width={50}
                      height={30}
                    />
                  </li>
                  <li>
                    <LazyImage
                      src="/iata.png"
                      className="img-fluid"
                      alt=""
                      imageSizes={32}
                      width={50}
                      height={30}
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-12 col-lg-3">
         <Link href={"#"}>
          <LazyImage 
                src="/trustpilot.png"
                className="img-fluid trst"
                alt=""
                imageSizes={32}
                width={128}
                height={22}
              /> 
</Link>
               
          </div> */}
          </div>
        </div>
      </div>

      <div className="container-fluid footer-bottom">
        <div className="container-lg footer-border">
          <div className="row">
            <div className="col-12 col-lg-12">
              <p>
                Derechos de autor &copy; 2025 viajexico.com. Reservados todos
                los derechos. (Empresa matriz : ALTITUDEWINGS LLC | EIN -
                33-2247840 )
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-bottom call-bg d-block d-md-block d-lg-none">
        <Link href={`tel:${phoneNumber}`}>
          <p>Llama ahora</p>
          <h4 className="blink"> {phoneNumber}</h4>
        </Link>
      </div>
    </>
  );
};

export default Footer;
