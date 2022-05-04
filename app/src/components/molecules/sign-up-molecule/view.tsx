import GreenButton from "../greenButton/view";
import "./styles.scss";

export interface SignUpMoleculeProps {
  onSignup?: () => void;
  onParcelChange?: (value: number) => void;
  parcelValue: string;
  value?: number;
}

const SignUpMolecule: React.FC<SignUpMoleculeProps> = ({
  onSignup,
  parcelValue,
  value = 1,
  onParcelChange,
}) => {
  const hdlOnChangeParcel = (value: number) => {
    if (onParcelChange) {
      onParcelChange(value);
    }
  };
  return (
    <>
      <div className="sign-up-molecule">
        <input
          type="number"
          value={value}
          max={80}
          min={1}
          onChange={(event: any) => hdlOnChangeParcel(event.target.value)}
        />
        <div className="last-p">
          <p>parcelas de</p>
          <p>R$ {parcelValue}</p>
        </div>
        <GreenButton
          onClick={() => onSignup && onSignup()}
          children="FAZER MEU CADASTRO"
        ></GreenButton>
      </div>
    </>
  );
};

export default SignUpMolecule;
