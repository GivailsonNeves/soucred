import { Button } from "react-bootstrap";
import "./styles.scss";

export interface ParcelFieldProps {
  onChangeValue?: (value: any) => void;
  value?: any;
}

const ParcelField: React.FC<ParcelFieldProps> = ({ onChangeValue, value }) => {
  const hdlValue = (newValue: any) => {
    if (onChangeValue) onChangeValue(Math.max(1, value + newValue));
  };
  const onChange = (value: any) => {
    const v = parseInt(value);
    if (onChangeValue && !isNaN(v)) onChangeValue(v);
  };
  return (
    <div className="money-field">
      <div>
        <Button onClick={() => hdlValue(-1)}>
          <span>-</span>
        </Button>
      </div>
      <input
        type="tel"
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      />
      <div>
        <Button onClick={() => hdlValue(+1)}>
          <span>+</span>
        </Button>
      </div>
    </div>
  );
};

export default ParcelField;
