import React from "react";
import { useTranslation } from "react-i18next";
import Explanation from "../../components/templates/Explanation";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import SimulateLoan from "../../components/templates/SimulateLoan";
import SimulatorCard from "../../components/templates/SimulatorCard";
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
      {/* <SimulatorCard />
      <Explanation /> */}
      <Footer />
    </>
  );
};

export default DoSimulation;
