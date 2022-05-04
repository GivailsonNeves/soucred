import { useMemo, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { TypeCredit } from "../../../pages/DoSimulation/view";
import { UtilsNavigator } from "../../../utils";
import SignUpMolecule from "../../molecules/sign-up-molecule/view";
import SimulatorPanel from "../../molecules/simulator-panel";

import "./styles.scss";

const enum CreditType {
  pessoal = "pessoal",
  consignado = "consignado",
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
};

const PersonalSocialSimulator: React.FC = () => {
  const [creditType, setCreditType] = useState<CreditType>(CreditType.pessoal);
  const [simulatorValue, setSimulatorValue] = useState<any>("0,00");
  const [parceltimes, setParceltimes] = useState<number>(60);
  const history = useHistory();
  const hdlValueChange = (value: any) => {
    setSimulatorValue(value);
  };
  const currentTax: number = useMemo(() => {
    return typeCredits[creditType]?.taxValue || 0;
  }, [creditType]);

  const parcelValue = useMemo(() => {
    const floatValue =
      (parseFloat(simulatorValue.replace(",", ".")) / parceltimes) * currentTax;
    return isNaN(floatValue)
      ? "0,00"
      : floatValue.toFixed(2).toString().replace(".", ",");
  }, [simulatorValue, parceltimes, currentTax]);

  return (
    <div className="PersonalSocialSimulator">
      <ButtonGroup>
        <Button
          onClick={() => setCreditType(CreditType.pessoal)}
          className={creditType === CreditType.pessoal ? "active" : ""}
        >
          PESSOAL
        </Button>
        <Button
          onClick={() => setCreditType(CreditType.consignado)}
          className={creditType === CreditType.consignado ? "active" : ""}
        >
          CONSIGNADO
        </Button>
      </ButtonGroup>
      <SimulatorPanel
        title="De quanto você precisa?"
        taxValue={currentTax}
        type="pessoal"
        onValueChange={hdlValueChange}
      />
      <SignUpMolecule
        parcelValue={parcelValue}
        numInstallments={[80, 70, 60, 40, 36, 24, 12]}
        onParcelChange={setParceltimes}
        value={parceltimes}
        onSignup={() => {
          history.push(
            `credito/${creditType}/${parceltimes}/${simulatorValue}`
          );
          UtilsNavigator.gotoTop();
        }}
      ></SignUpMolecule>
      <div className="second-sub-title">
        <p>Essas parcelas podem ser ainda melhores.</p>
        <p> Envie seus documentos e faça sua simulação personalizada.</p>
      </div>
    </div>
  );
};

export default PersonalSocialSimulator;
