import React from "react";
import Head from "next/head";
import Link from "next/link";
import { quickLinks, sitemap } from "@/constant/commonConstants";
import Breadcrumb from "./components/shared/Breadcrumb";

const Sitemap = () => {
  return (
    <>
      <Head>
        <title>Mapa del sitio</title>
      </Head>
      <Breadcrumb title={"Mapa del sitio"} />
      <div>
        <div className="container-xl pt-5 inner-page">
          <div className="row">
            <div className="col-12">
              <h2>Mapa del sitio</h2>
              <hr />
              <p>Ofrecemos las últimas tarifas de vuelos a los principales destinos en todo
                el mundo. Aquí está la lista completa de los principales destinos y destinos.
                enlaces rápidos para acceder a este sitio web.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-lg-12 col-xl-12 top-margin mb-5 sitemap">
              <h6>enlaces rápidos</h6>
              <hr />
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <h6>Top Airlines</h6>
            <hr />
            <div className="col-12 col-sm-6 col-lg-12 col-xl-12 top-margin sitemap">
              <ul>
                {sitemap.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
