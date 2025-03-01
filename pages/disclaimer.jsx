import Head from "next/head";
import React from "react";
import Breadcrumb from "./components/shared/Breadcrumb";
import { phoneNumber } from "@/constant/headerConstant";

const Page = () => {
  return (
    <>
      <Head>
        <title>{"Descargo de responsabilidad"}</title>
      </Head>

      <Breadcrumb title={"Descargo de responsabilidad"} />

      <div className="container-xl pt-5 inner-page">
        <div className="col-sm-12">
          <h2>Descargo de responsabilidad</h2>
          <p>
            La información proporcionada en este sitio web es solo para fines
            informativos generales. Si bien nos esforzamos por mantener la
            información actualizada y precisa, no ofrecemos garantías ni
            representaciones de ningún tipo, expresas o implícitas, sobre la
            integridad, exactitud, fiabilidad, idoneidad o disponibilidad de la
            información, servicios o gráficos relacionados contenidos en este
            sitio web para cualquier propósito.
          </p>

          <h5>Riesgos de Viaje</h5>
          <p>
            Viajar implica riesgos inherentes, incluidos, entre otros, riesgos
            para la salud, problemas de seguridad y cambios inesperados en las
            condiciones. Recomendamos encarecidamente a los usuarios que
            consulten los avisos de viaje oficiales del gobierno y se asesoren
            con las autoridades competentes antes de hacer planes de viaje. No
            somos responsables de ninguna pérdida, lesión o inconveniente
            derivado de decisiones de viaje basadas en la información
            proporcionada en este sitio web.
          </p>

          <h5>Enlaces a Terceros</h5>
          <p>
            Este sitio web puede contener enlaces a sitios web o servicios de
            terceros. No controlamos ni respaldamos el contenido, la exactitud o
            las políticas de estos sitios externos. El acceso a enlaces de
            terceros es bajo la responsabilidad del usuario.
          </p>

          <h5>Cambios y Actualizaciones</h5>
          <p>
            Nos reservamos el derecho de actualizar, modificar o eliminar
            cualquier contenido en este sitio web sin previo aviso. Es
            responsabilidad del usuario verificar la información antes de
            confiar en ella.
          </p>

          <h5>Limitación de Responsabilidad</h5>
          <p>
            Bajo ninguna circunstancia seremos responsables de cualquier pérdida
            o daño, incluidos, entre otros, pérdidas indirectas o
            consecuenciales, que surjan del uso de este sitio web o de la
            confianza en la información aquí proporcionada.
          </p>

          <h5>Contáctanos</h5>
          <p>
            Si tienes alguna pregunta sobre este aviso legal, contáctanos en{" "}
            {phoneNumber}.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
