import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InfoCard from "../../molecules/info-card";

import "./styles.scss";

import celPhone from "../,,/../../../assets/images/img_3.png";
import Titles from "../../molecules/titles/view";

interface SolutionsProps {
  showNavigation?: boolean;
}

function Solutions({ showNavigation = true }: SolutionsProps) {
  const [t] = useTranslation();
  const myArray = ["√ Pague em até 80x no boleto.",
    "√ Sem valor mínimo das parcelas.",
    " √ 30 dias para começar a pagar.",
    "√ Melhores taxas do mercado.",
    "√ Dinheiro na conta em até 48h."]

  return (
    <section className="solution-section" id="solution-section">
      <Container>
        <Row>
          <Col xs={6} md={4} >
            <Titles
              greenText="Soluções"
              blackText="Precisa de dinheiro rápido?"
              blackTitleStyle={{ "width": "400px" }}
              subTitleText="Temos as melhores soluções pra você!"
            />
          </Col>
          <Col xs={6} md={8}>
            <Row>
              <Col xs={6} md={6}>
                <InfoCard
                  title="Saque-aniversário FGTS"
                  middle="Quer antecipar seu saque-aniversário do FGTS? Aqui você pode antecipar até 7 anos e receber o dinheiro em até uma hora."
                >
                </InfoCard>
              </Col>
              <Col xs={6} md={6} >
                <InfoCard
                  title="Crédito consignado "
                  miniTitle="(aposentados e pensionistas)"
                  middle="Crédito rápido e superseguro para ambos os lados, descontando a prestação diretamente de seu salário/INSS."
                >
                </InfoCard>
              </Col>
            </Row>
            <Row>
              <Col>
                <p >*Nosso processo mais rápido levou apenas 16 minutos.</p>
                <p className="last-paragraph">*Aceitamos negativados.</p>
              </Col>
              <Col>
                <p>*Aceitamos negativados.</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={4} >
            <img src={celPhone} alt={t("general.appName")} />
          </Col>
          <Col xs={6} md={8}>
            <Row>
              <Col xs={6} md={6}>
                <InfoCard
                  title="Crédito pessoal"
                  middle="Seja para investir, pagar dívidas, ou para viajar, nós estamos com você nessa jornada. Faça uma simulação do valor e aproveite as vantagens:"
                  data={myArray}
                >
                </InfoCard>
              </Col>
              <Col xs={6} md={6} >
                <InfoCard
                  title="Financiamentos "
                  miniTitle="(imóveis e veículos)"
                  middle="Casa ou carro? Seja qual for o seu sonho, estamos aqui para te ajudar com o financiamento da maneira mais rápida para você dar início a esse investimento."
                >
                </InfoCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </section>
  );
}

export default Solutions;
