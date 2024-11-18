import Head from "next/head";
import React from "react";
import Breadcrumb from "./components/shared/Breadcrumb";

const Refund = () => {
  return (
    <>
      <Head>
        <title>Politica de reembolso</title>
      </Head>
      <Breadcrumb title={"Politica de reembolso"} />
      <div>
        <div className="container-xl pt-5 inner-page">
          <div className="col-sm-12">
            <h2>Politica de reembolso</h2>
            <div className="row mt-4">
              <div className="col-12">
                <h4>
                  Política de Cancelación y Reembolso de Explore Nut Travels
                </h4>

                <h4>No Reembolsables Después de 24 Horas:</h4>
                <ul>
                  <li>
                    Los boletos aéreos y los cargos por servicios de citas no
                    son reembolsables después de transcurridas 24 horas desde la
                    compra.
                  </li>
                  <li>
                    Para cancelaciones dentro de este período, se puede
                    contactar con nuestro servicio de atención al cliente las 24
                    horas del día, los 7 días de la semana.
                  </li>
                </ul>

                <h4>No Abordar el Vuelo:</h4>
                <ul>
                  <li>
                    Si un pasajero no aborda su vuelo, el billete no es
                    reembolsable, y la aerolínea retendrá el importe total.
                  </li>
                  <li>
                    No se permiten modificaciones de nombre de pasajeros una vez
                    comprado el billete, y los cambios de itinerario están
                    sujetos a las normas de la aerolínea.
                  </li>
                </ul>

                <h4>Aerolíneas de Bajo Costo y Reservas de Último Minuto:</h4>
                <ul>
                  <li>
                    Boletos de aerolíneas de bajo costo comprados dentro de los
                    siete días previos al viaje no son reembolsables.
                  </li>
                </ul>

                <h4>Reservas de Hotel y Alquiler de Autos:</h4>
                <ul>
                  <li>
                    El importe pagado por reservas de hotel y alquiler de coches
                    no es reembolsable, aunque los gastos de servicio pueden ser
                    reembolsables.
                  </li>
                </ul>

                <h4>Proceso de Cancelación y Reembolso:</h4>
                <ul>
                  <li>Cancelaciones deben realizarse vía telefónica.</li>
                  <li>
                    Las solicitudes de reembolso son consideradas si se cumplen
                    ciertas condiciones y normas tarifarias.
                  </li>
                  <li>
                    No se considera elegible para reembolso si el pasajero es
                    marcado como no presentado al no notificar a la aerolínea y
                    estar ausente durante el embarque.
                  </li>
                </ul>

                <h4>Exenciones y Proceso de Reembolso:</h4>
                <ul>
                  <li>
                    Podemos obtener exenciones de proveedores para procesar
                    solicitudes de cancelación y reembolso, aunque no
                    garantizamos su viabilidad.
                  </li>
                  <li>
                    Las solicitudes de reembolso siguen un proceso secuencial, y
                    la confirmación de recepción no garantiza un reembolso.
                  </li>
                </ul>

                <h4>Decisiones de los Proveedores:</h4>
                <ul>
                  <li>
                    Después de recibir una solicitud de cancelación y reembolso,
                    nos comunicamos con los proveedores para determinar la
                    posibilidad de un reembolso.
                  </li>
                  <li>
                    La decisión del proveedor es final, y se informará al
                    pasajero.
                  </li>
                </ul>

                <h4>Tiempo de Procesamiento y Crédito:</h4>
                <ul>
                  <li>
                    Si el proveedor aprueba el reembolso, el crédito puede
                    tardar entre 60 y 90 días en aparecer en el estado de cuenta
                    del pasajero.
                  </li>
                </ul>

                <h4>reservasvuelo.com de Servicio Posterior a la Emisión:</h4>
                <ul>
                  <li>
                    Además de las reservasvuelo.com de reembolso de proveedores,
                    Explore Nut Travels puede cobrar reservasvuelo.com por
                    servicio posterior a la emisión del boleto, solo aplicables
                    si el proveedor autoriza un reembolso o concede una
                    exención.
                  </li>
                  <li>
                    No se aplican a las reservasvuelo.com originales de registro
                    o reserva.
                  </li>
                </ul>

                <p>
                  Esta política garantiza transparencia y claridad en el proceso
                  de cancelación y reembolso, priorizando el cumplimiento de las
                  normas establecidas por los proveedores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
