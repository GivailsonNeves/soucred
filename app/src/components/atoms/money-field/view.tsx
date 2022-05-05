import { useState } from "react";
import { Button } from "react-bootstrap";
//@ts-ignore
import ReactMoneyComponent from "react-currency-input-mask";

import "./styles.scss";

export interface MoneyFieldProps {
  onChangeValue?: (value: any) => void;
  defaultValue?: any;
}

const MoneyField: React.FC<MoneyFieldProps> = ({
  onChangeValue,
  defaultValue,
}) => {
  const [value, setValue] = useState<any>(defaultValue || 0);
  const [busy, setBusy] = useState(false);
  const config = {
    prefix: "R$",
    suffix: "%",
    precision: 2,
    className: "money-input",
    decimalSeparator: ",",
  };

  const hdlValue = (newValue: any) => {
    const oldValueArr = value.toString().split(",");
    const newOne = `${parseInt(oldValueArr[0]) + newValue}.${oldValueArr[1]}`;
    setBusy(true);
    setValue(parseFloat(newOne));
    setTimeout(() => {
      setBusy(false);
    }, 0);
  };
  const onChange = (value: any) => {
    setValue(value);
    if (onChangeValue) onChangeValue(value);
  };
  return (
    <div className="money-field">
      <div>
        <Button onClick={() => hdlValue(-200)}>
          <span>-</span>
        </Button>
      </div>
      {!busy && (
        <div className="input-area">
          <span>R$</span>
          <ReactMoneyComponent
            value={value}
            config={config}
            onChange={onChange}
          />
        </div>
      )}
      <div>
        <Button onClick={() => hdlValue(+200)}>
          <span>+</span>
        </Button>
      </div>
    </div>
  );
};

export default MoneyField;
