import React from "react";
import { useTranslation } from "react-i18next";
import About from "../../components/templates/About";
import Benefits from "../../components/templates/Benefits";
import Contact from "../../components/templates/Contact";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import Introduction from "../../components/templates/Introduction";
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
      <Footer />
    </>
  );
};

export default HomeView;
