import "./globals.css";
import { DataProvider } from "../utils/DataContext";
import SearchModal from "./components/shared/SearchModal";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import GoogleTag from "./components/GoogleTag";
import "./style/classSelection.css";
import "./style/autoCompleteInput.css";
import Popup from "./components/shared/Popup";
import { useRouter } from "next/router";
import { getLanguage } from "@/getLang";
import { useEffect, useState } from "react";
import Undercuttingbanner from "./components/shared/Undercuttingbanner";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [langData, setLangData] = useState(null);

  useEffect(() => {
    const getLang = async () => {
      const json = await getLanguage("es");
      setLangData(json);
    };
    getLang();
  }, []);
  return (
    <DataProvider>
      <Header langData={langData} />
      <Popup />
      <Component {...pageProps} />
      <Footer langData={langData} />
      <SearchModal />
      {/* <Undercuttingbanner/> */}
      <GoogleTag />
    </DataProvider>
  );
}

export default MyApp;
