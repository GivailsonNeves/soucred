import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Benefits from "../../components/templates/Benefits";
import Doubts from "../../components/templates/Doubts";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import HowWorks from "../../components/templates/HowWorks";
import Introduction from "../../components/templates/Introduction";
import Simulators from "../../components/templates/Simulators";
import Solutions from "../../components/templates/Solutions";

import "./styles.scss";

export interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  const [t] = useTranslation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function updateOffset() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", updateOffset);
    updateOffset();

    return () => window.removeEventListener("scroll", updateOffset);
  }, [setOffset]);

  return (
    <>
      <Header offset={offset} />
      <Introduction />
      <Benefits />
      {/* <Solutions /> */}
      {/* <HowWorks /> */}
      {/* <Simulators /> */}
      <Doubts />
      <Footer />
    </>
  );
};

export default HomeView;
