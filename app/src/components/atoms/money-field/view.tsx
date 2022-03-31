import { useState } from "react";
import { Button } from "react-bootstrap";

import "./styles.scss";

const MoneyField: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="money-field">
      <Button onClick={() => setValue((value) => Math.max(value - 1, 0))}>
        -
      </Button>
      <input
        value={value.toString()}
        onChange={(event) => setValue(parseInt(event.target?.value || "0"))}
        type="tel"
      />
      <Button onClick={() => setValue((value) => value + 1)}>+</Button>
    </div>
  );
};

export default MoneyField;
