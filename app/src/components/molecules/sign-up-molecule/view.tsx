import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import GreenButton from "../greenButton/view";
import "./styles.scss";

export interface SignUpMoleculeProps {
  numInstallments?: object;
  onSignup?: () => void;
}

const SignUpMolecule: React.FC<SignUpMoleculeProps> = ({
  numInstallments,
  onSignup,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="sign-up-molecule">
        <DropdownButton as={ButtonGroup} title="80" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">80</Dropdown.Item>
          <Dropdown.Item eventKey="2">70</Dropdown.Item>
        </DropdownButton>
        <div className="last-p">
          <p>parcelas de</p>
          <p>R$ 0,00</p>
        </div>
        <GreenButton
          onClick={() =>
            onSignup ? onSignup() : history.push("/dosimulation")
          }
          children="FAZER MEU CADASTRO"
        ></GreenButton>
      </div>
    </>
  );
};

export default SignUpMolecule;
