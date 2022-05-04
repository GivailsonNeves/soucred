import React from "react";
import { useParams } from "react-router-dom";
import Explanation from "../../components/templates/Explanation";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import SimulatorCard from "../../components/templates/SimulatorCard";
import SubHeader from "../../components/templates/SubHeader";
import "./styles.scss";

export interface LootFgtsViewProps {}

const LootFgts: React.FC<LootFgtsViewProps> = () => {
  const { value } = useParams<{ value?: string }>();
  console.log({ value });
  return (
    <>
      <Header offset={0} />
      <SubHeader />
      <SimulatorCard value={value} />
      <Explanation />
      <Footer />
    </>
  );
};

export default LootFgts;
