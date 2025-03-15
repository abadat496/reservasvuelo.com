import React from "react";
import Head from "next/head";
import Breadcrumb from "./components/shared/Breadcrumb";
import LazyImage from "./components/ui/LazyImage";
import { phoneNumber } from "@/constant/headerConstant";

const About = () => {
  return (
    <>
      <Head>
        <title>{"Sobre Nosotras"}</title>
      </Head>
      <Breadcrumb title={"Sobre Nosotras"} />

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
              <p>Convenientes opciones de autoservicio disponibles en línea.</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="ccontent">
              <h3>
                <i class="fa-solid fa-check-double"></i> Orientación experta
              </h3>
              <p>
                Obtenga asistencia personalizada de nuestros expertos en viajes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl inner-page mb-5">
        <div className="col-12">
          <h2>Sobre Nosotras</h2>
          <hr />
          <p>
            viajexico.com ofrece una solución completa para reservar viajes en
            línea a destinos mundialmente conocidos. Calculará las tarifas
            locales más convenientes para que todas las empresas de transporte
            recojan los datos más recientes sobre precauciones y admisión aérea
            por teléfono. Nuestro objetivo es brindarle los mejores cursos de
            acción de viaje al mejor precio. Debido a nuestra amplia
            organización de operadores, querrá reservar sus viajes de
            recreación. Para brindarle la mejor valoración de viajes abiertos en
            línea, el profesorado de viajexico.com está siempre dispuesto an
            ayudarlo y guiarlo a través del proceso de compra de boletos.
            Suponiendo que utilice nuestras increíbles oficinas y ayuda, llegará
            a tiempo.
            <br></br>
            <br></br>
            Nuestro objetivo es brindarles la mejor información de viaje
            posible. Para aumentar el valor de Visit, Playful y Friends Fly,
            Travel Business se ha unido a Friends Fly. Un sitio web llamado
            Friends Vuelan ofrece billetes de transporte actualizados e
            inéditos. Nuestro deber es conectarlo an una variedad de compañías
            para que tenga tarifas de vuelo reales para cambiar de rumbo y
            horarios, así como para saber con certeza cuando planifique su
            excursión. Desde nuestra perspectiva, viajexico.com ofrece las
            ventajas más adaptables y funcionales. Friends Fly es una reunión
            excepcionalmente feliz de especialistas que trabajan las 24 horas
            del día, los 7 días de la semana para brindarle lo mejor y la ayuda
            dinamita al menor costo posible. Nuestros expertos te ayudarán an
            ajustar tus gastos, cancelar futuros créditos y descuentos en
            función de sus necesidades de salida.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
