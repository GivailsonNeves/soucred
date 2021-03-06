import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import celPhone from "../../../assets/images/mockup_mao.png";
import InfoCard from "../../molecules/info-card";
import Titles from "../../molecules/titles/view";
import "./styles.scss";

const Solutions: React.FC = () => {
  const [t] = useTranslation();
  const myArray = [
    "√ Pague em até 80x no boleto.",
    "√ Sem valor mínimo das parcelas.",
    " √ 30 dias para começar a pagar.",
    "√ Melhores taxas do mercado.",
    "√ Dinheiro na conta em até 48h.",
  ];

  return (
    <section className="solution-section" id="solution-section">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Titles
              greenText="Soluções"
              blackText="Precisa de dinheiro rápido?"
              subTitleText="Temos as melhores soluções pra você!"
            />
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={6}>
                <InfoCard
                  link="/saque-fgts"
                  title="Saque-aniversário FGTS"
                  middle="Quer antecipar seu saque-aniversário do FGTS?"
                  secondMiddle="Aqui você pode antecipar até 7 anos e receber o dinheiro em até uma hora."
                ></InfoCard>
                <div className="info-box">
                  <p>*Nosso processo mais rápido levou apenas 16 minutos.</p>
                  <p className="last-paragraph">*Aceitamos negativados.</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <InfoCard
                  link="/credito/consignado"
                  title="Crédito consignado "
                  miniTitle="(aposentados e pensionistas)"
                  middle="Crédito rápido e superseguro para ambos os lados, descontando a prestação diretamente de seu salário/INSS."
                ></InfoCard>
                <div className="info-box">
                  <p>*Aceitamos negativados.</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={{ span: 12 }}>
            <Row>
              <Col xs={6} sm={6} md={4}>
                <img src={celPhone} alt={t("general.appName")} />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <InfoCard
                  link="/credito/pessoal"
                  title="Crédito pessoal"
                  middle="Seja para investir, pagar dívidas, ou para viajar, nós estamos com você nessa jornada. Faça uma simulação do valor e aproveite as vantagens:"
                  data={myArray}
                ></InfoCard>
                <p />
              </Col>
              <Col xs={12} md={4}>
                <InfoCard
                  title="Financiamentos"
                  link="/credito/financiamento"
                  miniTitle="(imóveis e veículos)"
                  middle="Casa ou carro? Seja qual for o seu sonho, estamos aqui para te ajudar com o financiamento da maneira mais rápida para você dar início a esse investimento."
                ></InfoCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Solutions;
