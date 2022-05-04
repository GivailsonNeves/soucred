import { Col, Container, Row } from "react-bootstrap";
import Titles from "../../molecules/titles/view";
import FgtsWidraw from "../../organisms/fgts-widraw";
import PersonalSocialSimulator from "../../organisms/personal-social-simulator";
import "./styles.scss";

const Simulators: React.FC = () => {
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
          <Col>
            <FgtsWidraw />
          </Col>
        </Row>
        <Row className="second-row">
          <Col xs={12} md={6} lg={3}>
            <Titles
              blackText="Quer simular as parcelas de um empréstimo pessoal ou consignado?"
              subTitleText="Envie seus documentos para análise e a gente te retorna rapidinho via WhatsApp."
            />
          </Col>
          <Col>
            <PersonalSocialSimulator />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Simulators;
