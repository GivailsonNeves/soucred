import { useTranslation } from "react-i18next";
import MoneyField from "../../atoms/money-field";

import "./styles.scss";

export interface SimulatorPanelProps {
  title: string;
  taxValue: number;
  type: string;
  defaultValue?: any;

  onValueChange?: (value: any) => void;
}

const SimulatorPanel: React.FC<SimulatorPanelProps> = ({
  title,
  taxValue,
  defaultValue,
  onValueChange,
}) => {
  const [t] = useTranslation();
  return (
    <div className="simulator-panel">
      <h3>{title}</h3>
      <MoneyField defaultValue={defaultValue} onChangeValue={onValueChange} />
      <p>
        {t("simulator.tax-text").replace(
          "{tax-value}",
          taxValue.toString().replace(".", ",")
        )}
      </p>
    </div>
  );
};

export default SimulatorPanel;
