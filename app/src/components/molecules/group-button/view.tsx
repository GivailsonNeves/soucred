import "./styles.scss";

export interface GroupButtonProps {
  step: number;
  onStepSelect: (index: number) => void;
}

const GroupButton: React.FC<GroupButtonProps> = ({ step, onStepSelect }) => {
  return (
    <div className="group-btn">
      <div
        className={step === 0 ? "button-marked" : "button"}
        onClick={() => onStepSelect(0)}
      >
        <p>1</p> Simulador
      </div>
      <div
        className={step === 1 ? "button-marked" : "button"}
        onClick={() => onStepSelect(1)}
      >
        <p>2</p>Cadastro
      </div>
      <div
        className={step === 2 ? "button-marked" : "button"}
        onClick={() => onStepSelect(2)}
      >
        <p>3</p>Resultado
      </div>
    </div>
  );
};

export default GroupButton;
