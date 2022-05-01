import { useTranslation } from "react-i18next";
import MoneyField from "../../atoms/money-field";

import "./styles.scss";

export interface SimulatorPanelProps {
  title: string;
  taxValue: number;
  type: string;
}

const SimulatorPanel: React.FC<SimulatorPanelProps> = ({ title, taxValue }) => {
  const [t] = useTranslation();
  return (
    <div className="simulator-panel">
      <h3>{title}</h3>
      <MoneyField />
      <p>
        {t("simulator.tax-text").replace("{tax-value}", taxValue.toString())}
      </p>
    </div>
  );
};

export default SimulatorPanel;
