import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GreenButton from "../../molecules/greenButton/view";
import Titles from "../../molecules/titles/view";

import "./styles.scss";

import identity from "../../../assets/images/Grupo_6.png";
import chek from "../../../assets/images/Grupo_7.png";
import time from "../../../assets/images/Grupo_44.png";
import dolar from "../../../assets/images/Grupo_11.png";
import home from "../../../assets/images/Grupo_12.png";
import celPhone from "../../../assets/images/mockup_mao.png";
export interface HowWorksProps {}

const HowWorks: React.FC = () => {
  const [t] = useTranslation();

  return (
    <section className="how-works" id="how-works">
      <div className="cellphone">
        <img src={celPhone} alt={t("general.appName")} />
      </div>
      <Container>
        <div>
          <Titles
            greenText="Como funciona?"
            blackText="O processo é dividido em etapas, começando pela análise dos seus documentos:"
          />
          <div className="documents">
            <p>Saque-aniversário FGTS:</p>
            <Row>
              <Col xs={12} md={3}>
                <img src={identity} alt={t("general.appName")} />
                <h5>Documento de identificação pessoal.</h5>
              </Col>
              <Col xs={12} md={3}>
                <img src={chek} alt={t("general.appName")} />
                <h5>Aceite no aplicativo da Caixa.</h5>
              </Col>
              <Col xs={12} md={3}>
                <img src={time} alt={t("general.appName")} />
                <h5>Em menos de uma hora receba o pix na sua conta.</h5>
              </Col>
            </Row>
          </div>
          <p></p>
          <div className="documents">
            <p>Crédito pessoal e consignado:</p>
            <Row>
              <Col xs={12} md={3}>
                <img src={dolar} alt={t("general.appName")} />
                <h5>Comprovante de renda.</h5>
              </Col>
              <Col xs={12} md={3}>
                <img src={home} alt={t("general.appName")} />
                <h5>Comprovante de residência.</h5>
              </Col>
              <Col xs={12} md={3}>
                <img src={identity} alt={t("general.appName")} />
                <h5>Documento de identificação pessoal.</h5>
              </Col>
            </Row>
          </div>
          <div className="firsInfo">
            <h4>
              Entre a validação dos documentos e a aprovação da proposta, o
              dinheiro cai na sua conta em até 48h.
            </h4>
            <h4> Quer ver como é fácil e rápido?</h4>
          </div>
          <GreenButton
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+5561996517829&text=Olá!"
          >
            CHAMA NO ZAP
          </GreenButton>
          <div className="info">
            <h4>
              Fique atento aos golpes: a Soucred não solicita nenhum tipo de
              depósito antecipado para liberar o seu crédito.
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWorks;
