import Head from "next/head";
import React from "react";
import Breadcrumb from "./components/shared/Breadcrumb";

const Page = () => {
  return (
    <>
      <Head>
        <title>{"Política de Cookies"}</title>
      </Head>

      <Breadcrumb title={"Política de Cookies"} />

      <div className="container-xl pt-5 inner-page">
        <div className="col-sm-12">
          <h2>Política de Cookies</h2>
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia del
            usuario. Al usar este sitio web, aceptas el uso de cookies de
            acuerdo con esta política.
          </p>

          <h5>¿Qué son las cookies?</h5>
          <p>
            Las cookies son pequeños archivos que se guardan en tu computadora o
            dispositivo móvil cuando visitas un sitio web. Permiten que el sitio
            recuerde tus acciones y preferencias (como inicio de sesión, idioma,
            tamaño de fuente y otras preferencias de visualización) durante un
            período de tiempo, para que no tengas que volver a ingresarlas cada
            vez que vuelvas al sitio o navegues de una página a otra.
          </p>

          <h5>¿Cómo utilizamos las cookies?</h5>
          <p>Usamos cookies para diversos propósitos, incluyendo:</p>
          <ul>
            <li>Entender cómo usas nuestro sitio web.</li>
            <li>Mejorar tu experiencia de usuario.</li>
            <li>Proporcionar análisis y mediciones sobre el uso del sitio.</li>
          </ul>

          <h5>Gestión de cookies</h5>
          <p>
            Puedes controlar y/o eliminar las cookies según prefieras. Puedes
            eliminar todas las cookies que ya están en tu computadora y también
            puedes configurar la mayoría de los navegadores para evitar que se
            almacenen. Sin embargo, si haces esto, es posible que tengas que
            ajustar algunas preferencias manualmente cada vez que visites un
            sitio, y algunos servicios y funcionalidades pueden no funcionar.
          </p>

          <h5>Cambios en nuestra política de cookies</h5>
          <p>
            Podemos actualizar esta Política de Cookies de vez en cuando. Te
            recomendamos revisar esta página periódicamente para conocer
            cualquier cambio. Al continuar usando nuestro sitio web después de
            que publiquemos dichos cambios, aceptas la Política de Cookies
            modificada.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
