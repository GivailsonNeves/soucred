import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import fast from "../,,/../../../assets/images/noun-fast-316759.png";
import economy from "../,,/../../../assets/images/noun-economy-1588814.png";
import smile from "../,,/../../../assets/images/noun-smile-1285220.png";
import security from "../,,/../../../assets/images/noun-security-4695893.png";
import flexible from "../,,/../../../assets/images/noun-flexible-payments-4362169.png";
import BenefitsItem from "../../atoms/BenefitsItem";

interface BenefitsProps {
  showNavigation?: boolean;
}

function Benefits({ showNavigation = true }: BenefitsProps) {
  const [t] = useTranslation();

  return (
    <section className="benefits" id="benefits">
      <Container>
        <h2>Só vi vantagens</h2>
        <Row>
          <Col xs={6} md={6} lg={2}>
            <img src={fast} alt={t("general.appName")} />
            <p className="title">Agilidade:</p>
            <p>Dinheiro na conta em menos de 1 hora*</p>
          </Col>
          <Col xs={6} md={6} lg={2}>
            <BenefitsItem
              imgPath={economy}
              title="Economia"
              text="Melhores taxas"
            />
          </Col>
          <Col xs={6} md={6} lg={2}>
            <img src={smile} alt={t("general.appName")} />
            <p className="title">Facilidade:</p>
            <p>Tudo feito via WhatsApp</p>
          </Col>
          <Col xs={6} md={6} lg={2}>
            <img src={security} alt={t("general.appName")} />
            <p className="title">Segurança: </p>
            <p>Somos regulamentados pelo Banco Central</p>
          </Col>
          <Col xs={6} md={6} lg={2}>
            <img src={flexible} alt={t("general.appName")} />
            <p className="title">Flexibilidade:</p>
            <p> Sem valor mínimo das parcelas</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
