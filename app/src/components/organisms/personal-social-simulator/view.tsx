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

export interface PersonalSocialSimulatorProps {
  showSwitcher?: boolean;
  type?: string;
  value?: string;
  times?: number;
}
const PersonalSocialSimulator: React.FC<PersonalSocialSimulatorProps> = ({
  showSwitcher = true,
  type = CreditType.pessoal,
  value = "0,00",
  times = 60,
}) => {
  const [creditType, setCreditType] = useState<string>(type);
  const [simulatorValue, setSimulatorValue] = useState<any>(value);
  const [parceltimes, setParceltimes] = useState<number>(times);
  const history = useHistory();
  const hdlValueChange = (value: any) => {
    setSimulatorValue(value);
  };
  const currentTax: number = useMemo(() => {
    return typeCredits[creditType]?.taxValue || 0;
  }, [creditType]);

  const parcelValue = useMemo(() => {
    if (parceltimes < 1 || currentTax <= 0) {
      return "0,00";
    }
    const floatValue = isNaN(parseFloat(simulatorValue.replace(",", ".")))
      ? 0
      : parseFloat(simulatorValue.replace(",", "."));
    const parcelValue =
      floatValue / parceltimes +
      ((currentTax / 100) * parceltimes * floatValue) / parceltimes;
    return !isNaN(parcelValue)
      ? parcelValue.toFixed(2).toString().replace(".", ",")
      : "0,00";
  }, [simulatorValue, parceltimes, currentTax]);

  return (
    <div className="PersonalSocialSimulator">
      {showSwitcher && (
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
      )}
      <SimulatorPanel
        title="De quanto você precisa?"
        taxValue={currentTax}
        type={creditType}
        onValueChange={hdlValueChange}
      />
      <SignUpMolecule
        parcelValue={parcelValue}
        onParcelChange={setParceltimes}
        value={parceltimes}
        onSignup={() => {
          history.push(
            `/credito/${creditType}/${parceltimes}/${simulatorValue}`
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
