import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import GreenButton from "../../molecules/greenButton/view";
import SimulatorPanel from "../../molecules/simulator-panel";

import "./styles.scss";

export interface FgtsWidrawProps {}
const FgtsWidraw: React.FC<FgtsWidrawProps> = () => {
  const [t] = useTranslation();
  const [value, setValue] = useState<any>();
  const history = useHistory();

  const handleFoward = () => {
    history.push(`/saque-fgts/${value}`);
  };

  return (
    <div className="cardSimulator">
      <SimulatorPanel
        title={t("simulator.what-is-your-value")}
        taxValue={1.59}
        type="saque-aniversario"
        onValueChange={setValue}
      />
      <GreenButton onClick={handleFoward}>AVANÇAR</GreenButton>
      <p className="sub-title">
        *Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa aqui.
      </p>
    </div>
  );
};

export default FgtsWidraw;
