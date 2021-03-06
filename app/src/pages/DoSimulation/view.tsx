import React from "react";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import SimulateLoan from "../../components/templates/SimulateLoan";
import SubHeaderSimulation from "../../components/templates/SubHeaderSimulation/view";
import "./styles.scss";

export interface DoSimulationViewProps {
  type?: string;
  times?: number;
  value?: string;
}

export interface TypeCredit {
  type: string;
  title: string;
  subTitle?: string;
  subTitle2?: string;
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
    subTitle: "*Aceitamos negativados.",
    subTitle2: "Empréstimo rápido e seguro?",
    taxValue: 2.14,
    call: "Faça uma simulação do valor e aproveite as vantagens",
    subCall:
      "Essas parcelas podem ser ainda melhores.<br/>Envie seus documentos e faça sua simulação personalizada",
  },
  financiamento: {
    type: "financiamento",
    title: "Financiamento",
    call: "Casa ou carro? Seja qual for o seu sonho, estamos aqui para te ajudar com o financiamento da maneira mais rápida para você dar início a esse investimento.",
    subCall:
      "Essas parcelas podem ser ainda melhores.<br/>Envie seus documentos e faça sua simulação personalizada",
  },
  fgts: {
    type: "fgts",
    title: "Saque-aniversário do FGTS",
    taxValue: 1.69,
    call: "Que tal ter dinheiro agora sem comprometer sua renda mensal? Faça uma simulação de quanto você pode liberar no seu FGTS.",
    subCall: "Envie seus documentos e faça sua simulação personalizada",
  },
};

const DoSimulation: React.FC<DoSimulationViewProps> = ({
  type = "nenhum",
  times,
  value,
}) => {
  const { title, subTitle, subTitle2, ...propsSimulator } = typeCredits[type];
  return (
    <div className="doSimulation">
      <Header offset={0} />
      <SubHeaderSimulation
        title={title}
        subTitle={subTitle}
        subTitle2={subTitle2}
      />
      <SimulateLoan {...{ ...propsSimulator, times, value }} />
      <Footer />
    </div>
  );
};

export default DoSimulation;
