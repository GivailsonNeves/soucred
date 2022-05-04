import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import GreenButton from "../greenButton/view";
import "./styles.scss";

export interface SignUpMoleculeProps {
  numInstallments?: number[];
  onSignup?: () => void;
  onParcelChange?: (value: number) => void;
  parcelValue: string;
  value?: number;
}

const SignUpMolecule: React.FC<SignUpMoleculeProps> = ({
  numInstallments,
  onSignup,
  parcelValue,
  value = 1,
  onParcelChange,
}) => {
  return (
    <>
      <div className="sign-up-molecule">
        <DropdownButton as={ButtonGroup} title={value} id="bg-nested-dropdown">
          {numInstallments &&
            numInstallments.map((num, index) => (
              <Dropdown.Item
                eventKey={index}
                key={index}
                onClick={() => onParcelChange && onParcelChange(num)}
              >
                {num}
              </Dropdown.Item>
            ))}
        </DropdownButton>
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
