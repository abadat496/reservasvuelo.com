import React from "react";
import Head from "next/head";
import SearchForm from "./components/shared/Searchform";
import LazyImage from "./components/ui/LazyImage";
import { phoneNumber, website } from "@/constant/headerConstant";

const Home = () => {
  return (
    <>
      <Head>
        <title>{website}</title>
      </Head>
      <SearchForm reset={true} backGroundImage={"/slider.jpg"} />

      <div className="fullbody">
        <div className="container">
          <div className="row explore-main pt-5">
            <div className="col-md-3 mb-4">
              <div className="ccontent">
                <h3>
                  <i class="fa-solid fa-check-double"></i> ¡Consigue grandes
                  ofertas!
                </h3>
                <p>
                  ¡Elija entre más de 500 aerolíneas para obtener tarifas aéreas
                  económicas!
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="ccontent">
                <h3>
                  <i class="fa-solid fa-check-double"></i> Igualación de precios
                </h3>
                <p>Encuentre precios bajos a destinos en todo el mundo.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="ccontent">
                <h3>
                  <i class="fa-solid fa-check-double"></i> Cancelaciones fáciles
                </h3>
                <p>
                  Convenientes opciones de autoservicio disponibles en línea.
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="ccontent">
                <h3>
                  <i class="fa-solid fa-check-double"></i> Orientación experta
                </h3>
                <p>
                  Obtenga asistencia personalizada de nuestros expertos en
                  viajes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xl">
          <div className="row explore-main mt-5 inside">
            <div className="col-sm-12">
              <h2 className="mb-4">Explora las mejores ofertas</h2>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage src="/c1.jpg" alt="Vietnam" layout="responsive" />
                  <div className="card-img-overlay">
                    <h6 className="card-title">Ho Chi Minh City, Vietnam</h6>
                    <h5>Vietnam</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage src="/c2.jpg" alt="Thailand" layout="responsive" />
                  <div className="card-img-overlay">
                    <h6 className="card-title">Bangkok, Thailand</h6>
                    <h5>Thailand</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage
                    src="/c3.jpg"
                    className="card-LazyImage"
                    alt="Singapore, Singapore"
                    layout="responsive"
                  />
                  <div className="card-img-overlay">
                    <h6 className="card-title">Singapore, Singapore</h6>
                    <h5>Singapore</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage
                    src="/c4.jpg"
                    className="card-LazyImage"
                    alt="Dubai"
                    layout="responsive"
                  />
                  <div className="card-img-overlay">
                    <h6 className="card-title">
                      Abu Dhabi, United Arab Emirates
                    </h6>
                    <h5>Dubai</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage
                    src="/c5.jpg"
                    className="card-LazyImage"
                    alt="Hong Kong, Hong Kong"
                    layout="responsive"
                  />
                  <div className="card-img-overlay">
                    <h6 className="card-title">Hong Kong, Hong Kong</h6>
                    <h5>Hong Kong</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage
                    src="/c6.jpg"
                    className="card-LazyImage"
                    alt="Denpasar Bali, Indonesia"
                    layout="responsive"
                  />
                  <div className="card-img-overlay">
                    <h6 className="card-title">Denpasar Bali, Indonesia </h6>
                    <h5>Indonesia</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage
                    src="/c7.jpg"
                    className="card-LazyImage"
                    alt="Japan"
                    layout="responsive"
                  />
                  <div className="card-img-overlay">
                    <h6 className="card-title">Tokyo, Japan </h6>
                    <h5>Japan</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-3 flirightbox mb-4">
              <a href="#">
                <div className="card">
                  <LazyImage
                    src="/c8.jpg"
                    className="card-LazyImage"
                    alt="WA"
                    layout="responsive"
                  />
                  <div className="card-img-overlay">
                    <h6 className="card-title">Perth, WA</h6>
                    <h5>WA</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <section className="newsubs">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-2">
                <div className="ccontent">
                  <LazyImage
                    className="card-LazyImage"
                    layout="responsive"
                    src="/p.png"
                  />{" "}
                </div>
              </div>

              <div className="col-md-4 p-2">
                <div className="ccontent">
                  <LazyImage
                    className="card-LazyImage"
                    layout="responsive"
                    src="/b.png"
                  />{" "}
                </div>
              </div>

              <div className="col-md-4 p-2">
                <div className="ccontent">
                  <LazyImage
                    className="card-LazyImage"
                    layout="responsive"
                    src="/4.png"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-xl">
          <div className="row explore-main mt-5 pb-5">
            <div className="col-sm-12">
              <h2 className="mb-4">Sobre Nosotros</h2>
              <p>
                reservasvuelo.com ofrece una solución completa para reservar
                viajes en línea a destinos mundialmente conocidos. Calculará las
                tarifas locales más convenientes para que todas las empresas de
                transporte recojan los datos más recientes sobre precauciones y
                admisión aérea por teléfono. Nuestro objetivo es brindarle los
                mejores cursos de acción de viaje al mejor precio. Debido a
                nuestra amplia organización de operadores, querrá reservar sus
                viajes de recreación. Para brindarle la mejor valoración de
                viajes abiertos en línea, el profesorado de reservasvuelo.com
                está siempre dispuesto an ayudarlo y guiarlo a través del
                proceso de compra de boletos. Suponiendo que utilice nuestras
                increíbles oficinas y ayuda, llegará a tiempo.
                <br></br>
                <br></br>
                Nuestro objetivo es brindarles la mejor información de viaje
                posible. Para aumentar el valor de Visit, Playful y Friends Fly,
                Travel Business se ha unido a Friends Fly. Un sitio web llamado
                Friends Vuelan ofrece billetes de transporte actualizados e
                inéditos. Nuestro deber es conectarlo an una variedad de
                compañías para que tenga tarifas de vuelo reales para cambiar de
                rumbo y horarios, así como para saber con certeza cuando
                planifique su excursión. Desde nuestra perspectiva,
                reservasvuelo.com ofrece las ventajas más adaptables y
                funcionales. Friends Fly es una reunión excepcionalmente feliz
                de especialistas que trabajan las 24 horas del día, los 7 días
                de la semana para brindarle lo mejor y la ayuda dinamita al
                menor costo posible. Nuestros expertos te ayudarán an ajustar
                tus gastos, cancelar futuros créditos y descuentos en función de
                sus necesidades de salida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
