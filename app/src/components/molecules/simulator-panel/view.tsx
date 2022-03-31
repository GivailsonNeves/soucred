import { useTranslation } from "react-i18next";
import MoneyField from "../../atoms/money-field";

export interface SimulatorPanelProps {
  title: string;
  taxValue: number;
}

const SimulatorPanel: React.FC<SimulatorPanelProps> = ({ title, taxValue }) => {
  const [t] = useTranslation();
  return (
    <div>
      <h3>{title}</h3>
      <MoneyField />
      <p>
        {t("simulator.tax-text").replace("{tax-value}", taxValue.toString())}
      </p>
    </div>
  );
};

export default SimulatorPanel;
