import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import GreenButton from "../../molecules/greenButton/view";
import SimulatorPanel from "../../molecules/simulator-panel";
import Titles from "../../molecules/titles/view";

import "./styles.scss";

const Simulators: React.FC = () => {
  const [t] = useTranslation();
  return (
    <section className="simulator" id="simulator">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Titles
              greenText="Simulador"
              blackText="Saque-aniversário do FGTS"
              subTitleText="Que tal ter dinheiro agora sem comprometer sua renda mensal? Antecipe até 7 anos do seu saque-aniversário."
            />
          </Col>
          <Col className="cardSimulator">
            <SimulatorPanel
              title={t("simulator.what-is-your-value")}
              taxValue={1.59}
            />
            <GreenButton onClick={() => console.log("vai porco")}>AVANÇAR</GreenButton>
          </Col>
          <p className="sub-title">*Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa aqui.</p>
        </Row>
        <Row className="second-row">
          <Col xs={12} md={6} lg={3}>
            <Titles
              blackText="Quer simular as parcelas de um empréstimo pessoal ou consignado?"
              subTitleText="Envie seus documentos para análise e a gente te retorna rapidinho via WhatsApp."
            />
          </Col>
          <Col>
            <ButtonGroup>
              <Button>PESSOAL</Button>
              <Button>CONSIGNADO</Button>
            </ButtonGroup>
            <SimulatorPanel
              title={t("De quanto você precisa?")}
              taxValue={1.59}
            />
            <div className="sign-up">
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
            <div className="second-sub-title">
              <p>Essas parcelas podem ser ainda melhores.</p>
              <p> Envie seus documentos e faça sua simulação personalizada.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Simulators;
