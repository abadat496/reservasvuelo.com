import { useEffect } from "react";
import Head from "next/head";

const GoogleTag = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16800279967";
    script1.async = true;
    script2.src = "https://www.googletagmanager.com/gtag/js?id=G-CMQSDJ1M0F";
    script2.async = true;

    // Load the scripts after the initial rendering
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    script1.onload = () => {
      // Execute your scripts here after the scripts are loaded
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-CMQSDJ1M0F");
    };

    script2.onload = () => {
      // Execute your scripts here after the scripts are loaded
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "AW-16800279967");

      gtag("config", "AW-16800279967/dgNjCJbauIAaEJ_b_8o-", {
        phone_conversion_number: "800 461 0995",
      });
    };

    // Clean up the script element when the component is unmounted
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

export default GoogleTag;
