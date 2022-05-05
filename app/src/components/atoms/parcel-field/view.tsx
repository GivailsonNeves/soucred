import { Button } from "react-bootstrap";
import "./styles.scss";

export interface ParcelFieldProps {
  onChangeValue?: (value: any) => void;
  value?: any;
  sufix?: string;
}

const ParcelField: React.FC<ParcelFieldProps> = ({
  onChangeValue,
  value,
  sufix,
}) => {
  const hdlValue = (newValue: any) => {
    if (onChangeValue) onChangeValue(Math.max(1, value + newValue));
  };
  const onChange = (value: any) => {
    const v = parseInt(value);
    if (onChangeValue && !isNaN(v)) onChangeValue(v);
  };
  return (
    <div className="parcel-field">
      <div>
        <Button onClick={() => hdlValue(-1)}>
          <span>-</span>
        </Button>
      </div>
      <div className="input-area">
        <input
          type="tel"
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
        />
        {sufix && <span>{sufix}</span>}
      </div>
      <div>
        <Button onClick={() => hdlValue(+1)}>
          <span>+</span>
        </Button>
      </div>
    </div>
  );
};

export default ParcelField;
