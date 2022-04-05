import React from "react";
import { useTranslation } from "react-i18next";
import Benefits from "../../components/templates/Benefits";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import HowWorks from "../../components/templates/HowWorks";
import Introduction from "../../components/templates/Introduction";
import Simulators from "../../components/templates/Simulators";
import Solutions from "../../components/templates/Solutions";

import "./styles.scss";

export interface HomeViewProps { }

const HomeView: React.FC<HomeViewProps> = () => {
  const [t] = useTranslation();

  return (
    <>
      <Header />
      <Introduction />
      <Benefits />
      <Solutions />
      <HowWorks />
      <Simulators />
      <Footer />
    </>
  );
};

export default HomeView;
