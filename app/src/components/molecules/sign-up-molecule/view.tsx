import { Button, ButtonGroup, Container, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import GreenButton from "../greenButton/view";

import "./styles.scss";

export interface SignUpMoleculeProps {
    numInstallments?: object;

}

const SignUpMolecule: React.FC<SignUpMoleculeProps> = ({
    numInstallments,

}) => {
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
                <GreenButton children="FAZER MEU CADASTRO"></GreenButton>
            </div>
        </>
    );
}

export default SignUpMolecule;