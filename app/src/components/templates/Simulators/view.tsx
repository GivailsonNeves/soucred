import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "react-bootstrap";
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
              greenTitleStyle={{ width: "200px" }}
              blackText="Saque-aniversário do FGTS"
              subTitleText="Que tal ter dinheiro agora sem comprometer sua renda mensal? Antecipe até 7 anos do seu saque-aniversário."
              subTitleStyle={{ width: "424px" }}
            />
          </Col>
          <Col className="cardSimulator">
            <SimulatorPanel
              title={t("simulator.what-is-your-value")}
              taxValue={1.59}
            />
            <GreenButton

              onClick={() => console.log("vai porco")}
            >
              AVANÇAR
            </GreenButton>
          </Col>
          <p className="sub-title">*Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa aqui.</p>
        </Row>


        <Row className="">
          <Col xs={12} md={6} lg={3}>

            <Titles
              blackText="Quer simular as parcelas de um empréstimo pessoal ou consignado?"
              blackTitleStyle={{ width: "370px" }}
              subTitleText="Envie seus documentos para análise e a gente te retorna rapidinho via WhatsApp."
              subTitleStyle={{ width: "370px" }}
            />
          </Col>

          <Col className="cardSimulator">
            <div className="buttons">
              <Button>PESSOAL</Button>
              <Button>CONSIGNADO</Button>
            </div>
            <SimulatorPanel
              title={t("De quanto você precisa?")}
              taxValue={1.59}
            />
            <div className="sign-up">
              <div>
                <p>80 parcelas de</p>
                <p className="last-p">R$ 0,00</p>
                <GreenButton children="FAZER MEU CADASTRO"></GreenButton>
              </div>
            </div>
          </Col>
          <p className="sub-title">Essas parcelas podem ser ainda melhores.</p>
          <p className="sub-title"> Envie seus documentos e faça sua simulação personalizada.</p>

        </Row>


        {/* <section className="simulators" id="simulators">
          <Container>
            <SimulatorPanel
              title={t("simulator.what-is-your-value")}
              taxValue={1.59}
            />
            <SimulatorPanel
              title={t("simulator.how-much-you-need")}
              taxValue={1.99}
            />
          </Container>
        </section> */}
      </Container>
    </section>
  );
};

export default Simulators;
