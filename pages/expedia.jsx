import React from "react";
import Head from "next/head";
import SearchForm from "./components/shared/Searchform";
import LazyImage from "./components/ui/LazyImage";
import { phoneNumber, website } from "@/constant/headerConstant";
import Link from "next/link";
import Undercuttingbanner from "./components/shared/Undercuttingbanner";

const Home = ({ langData }) => {
  return (
    <>
      <Head>
        <title>Expedia</title>
      </Head>
      {/* <Undercuttingbanner /> */}

      <div className="mob_section mt-5">
        <div className="air_spacial_phone_view">
          <Link href={`tel:${phoneNumber}`}>
            <div className="air_spacial_main">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="air_logo_area">
                      <LazyImage
                        className="logo-img mb-2 mt-2"
                        alt="ex"
                        src={`/expedia.png`}
                        layout="responsive"
                      />
                    </div>
                    <div className="air_spacial_middle">
                      <h4>Vuelos Baratos Boleto de avión</h4>
                      <h6>
                        <LazyImage src={`/plane_new.png`} layout="responsive" />
                      </h6>
                    </div>
                    <div className="list_ii">
                      <ul class="toll_booking">
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          ></i>{" "}
                          Nueva reserva 100 $ de descuento
                        </li>
                      </ul>
                      <h4 className="mt-3">Todas las rutas Vuelos Baratos</h4>
                      <div className="banner_number mt-5 pb-5">
                        <p>
                          <i className="fas fa-phone-alt"></i>
                          {phoneNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <SearchForm reset={true} backGroundImage={"/slider.jpg"} />

      <section className="newsubs">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="mb-4">Bienvenido a viajexico.com</h3>
            </div>

            <div className="col-md-12 text-left">
              <div className="">
                <p>
                  ¡Tu destino ideal para reservas de vuelos asequibles! En
                  viajexico.com, nos especializamos en ayudar a los clientes de
                  Expedia a encontrar tarifas de vuelos no publicadas y
                  gestionar sus necesidades de viaje con facilidad.
                  <br></br>
                  <br></br>
                  <strong>Nuestros Servicios Reservas de Vuelos:</strong>{" "}
                  Descubre ofertas increíbles en vuelos, incluyendo tarifas no
                  publicadas que no encontrarás en ningún otro lugar.
                  <br></br>
                  <br></br>
                  <strong>Nuevas Reservas:</strong> ¿Planeando tu próximo viaje?
                  Estamos aquí para asistirte con tus nuevas reservas sin
                  problemas.
                  <br></br>
                  <br></br>
                  <strong>Cancelaciones y Cambios:</strong> ¿Necesitas ajustar
                  tus planes? Nuestro equipo puede ayudar con cancelaciones y
                  cambios en tu itinerario.
                  <br></br>
                  <br></br>
                  <strong>Reservas de Hoteles: </strong>Ofrecemos excelentes
                  opciones para reservas de hoteles que complementan tus planes
                  de viaje.
                  <br></br>
                  Principales Destinos Explora destinos populares como Los
                  Ángeles y Las Vegas, perfectos tanto para escapadas
                  emocionantes como para retiros relajantes.
                  <br></br>
                  Los Ángeles, California: Experimenta el glamour de Hollywood y
                  las hermosas playas de Santa Mónica. Las Vegas, Nevada:
                  Disfruta de la vibrante vida nocturna, entretenimiento de
                  clase mundial y resorts de lujo en el Strip. Nueva York, Nueva
                  York: Descubre el icónico horizonte, los espectáculos de
                  Broadway y sus diversos vecindarios. Miami, Florida: Disfruta
                  del sol en hermosas playas y vive la animada vida nocturna de
                  esta vibrante ciudad. Chicago, Illinois: Visita la Ciudad de
                  los Vientos por su impresionante arquitectura, pizza deep-dish
                  y rica escena cultural. ¿Por qué Elegirnos? Soporte al Cliente
                  Dedicado: Nuestro amable y conocedor equipo de soporte al
                  cliente está disponible 24/7 para atender tus consultas y
                  brindar asistencia durante todo el proceso de reserva.
                  <br></br>
                  <br></br>
                  Experiencia Sin Contratiempos: Priorizamos tu satisfacción,
                  asegurando una experiencia de reserva sin complicaciones de
                  principio a fin.
                  <br></br>
                  <br></br>
                  Contáctanos Para cualquier pregunta o asistencia, no dudes en
                  comunicarte. ¡Nuestros agentes dedicados siempre están listos
                  para ayudar!
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
