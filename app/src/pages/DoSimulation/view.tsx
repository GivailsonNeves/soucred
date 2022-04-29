import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import SimulateLoan from "../../components/templates/SimulateLoan";
import SubHeaderSimulation from "../../components/templates/SubHeaderSimulation/view";
import "./styles.scss";

export interface DoSimulationViewProps {}

const DoSimulation: React.FC<DoSimulationViewProps> = () => {
  const [t] = useTranslation();

  return (
    <>
      <Header offset={0} />
      <SubHeaderSimulation />
      <SimulateLoan />
      <Footer />
    </>
  );
};

export default DoSimulation;
