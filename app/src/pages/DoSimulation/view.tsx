import React from "react";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import SimulateLoan from "../../components/templates/SimulateLoan";
import SubHeaderSimulation from "../../components/templates/SubHeaderSimulation/view";
import "./styles.scss";

export interface DoSimulationViewProps {
  type?: string;
}

export interface TypeCredit {
  type: string;
  title: string;
  subTitle?: string;
  call: string;
  subCall?: string;
  taxValue?: number;
}

const typeCredits: { [type: string]: TypeCredit } = {
  pessoal: {
    type: "pessoal",
    title: "Empréstimo Pessoal",
    taxValue: 18.13,
    call: "Seja para investir pagar dívidas viajar ou para compras de alto valor, nós estamos com você nessa jornada.",
  },
  consignado: {
    type: "consignado",
    title: "Empréstimo Consignado",
    subTitle: "Empréstimo rápido e seguro?",
    taxValue: 2.14,
    call: "Seja para investir pagar dívidas viajar ou para compras de alto valor, nós estamos com você nessa jornada.",
    subCall:
      "essas parcelas podem ser ainda melhores.<br/>Envie seus documentos e faça sua simulação personalizada",
  },
  financiamento: {
    type: "financiamento",
    title: "Financiamento",
    call: "Casa ou carro? Seja qual for o seu sonho, estamos aqui para te ajudar com o financiamento da maneira mais rápida para você dar início a esse investimento.",
    subCall:
      "Essas parcelas podem ser ainda melhores.<br/>Envie seus documentos e faça sua simulação personalizada",
  },
};

const DoSimulation: React.FC<DoSimulationViewProps> = ({ type = "nenhum" }) => {
  const { title, subTitle, ...propsSimulator } = typeCredits[type];
  return (
    <>
      <Header offset={0} />
      <SubHeaderSimulation title={title} subTitle={subTitle} />
      <SimulateLoan {...propsSimulator} />
      <Footer />
    </>
  );
};

export default DoSimulation;
