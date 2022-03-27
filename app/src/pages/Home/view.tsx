import React from "react";
import { useTranslation } from "react-i18next";
import About from "../../components/templates/About";
import Contact from "../../components/templates/Contact";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";

import "./styles.scss";

export interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  const [t] = useTranslation();

  return (
    <>
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeView;
