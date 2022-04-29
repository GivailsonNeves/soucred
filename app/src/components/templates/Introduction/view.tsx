import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { UtilsNavigator } from "../../../utils";
import "./styles.scss";

import logo from "../,,/../../../assets/images/img_3.png";
import cheks from "../,,/../../../assets/images/check.png";
import GreenButton from "../../molecules/greenButton/view";

interface IntroductionProps {
  showNavigation?: boolean;
}

function Introduction({ showNavigation = true }: IntroductionProps) {
  const [t] = useTranslation();

  return (
    <section className="introduction" id="introduction">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <h3>Na SouCred é assim:</h3>
            <h1>
              mensagem no Zap, dinheiro na conta.
              <img src={cheks} alt={t("general.appName")} />
            </h1>
            <p>
              Temos diversas soluções de crédito de acordo com a sua
              necessidade, com as melhores taxas e com todo o processo feito via
              WhatsApp.
              <GreenButton
                onClick={() =>
                  UtilsNavigator.gotoSectionName("solution-section")
                }
              >
                CONHEÇA NOSSAS SOLUÇÕES.
              </GreenButton>
            </p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <img
              className="garota-propaganda"
              src={logo}
              alt={t("general.appName")}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Introduction;
