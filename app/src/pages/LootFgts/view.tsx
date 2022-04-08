import React from "react";
import { useTranslation } from "react-i18next";
import Explanation from "../../components/templates/Explanation";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import SimulatorCard from "../../components/templates/SimulatorCard";
import Simulators from "../../components/templates/Simulators";
import SubHeader from "../../components/templates/SubHeader";

import "./styles.scss";

export interface LootFgtsViewProps { }

const LootFgts: React.FC<LootFgtsViewProps> = () => {
  const [t] = useTranslation();

  return (
    <>
      <Header />
      <SubHeader />
      <SimulatorCard />
      <Explanation />
      <Footer />
    </>
  );
};

export default LootFgts;
