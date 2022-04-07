import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import fast from "../,,/../../../assets/images/check.png";
import economy from "../,,/../../../assets/images/check.png";
import smile from "../,,/../../../assets/images/check.png";
import security from "../,,/../../../assets/images/check.png";
import flexible from "../,,/../../../assets/images/check.png";

interface BenefitsProps {
  showNavigation?: boolean;
}

function Benefits({ showNavigation = true }: BenefitsProps) {
  const [t] = useTranslation();

  return (
    <section className="benefits" id="benefits">
      <Container>
        <h2>Só vi vantagens</h2>
        <Row xs={1} md={6} lg={12}>
          <Col>
            <img src={fast} alt={t("general.appName")} />
            <p className="title">Agilidade:</p>
            <p>Dinheiro na conta em menos de 1 hora*</p>
          </Col>
          <Col>
            <img src={economy} alt={t("general.appName")} />
            <p className="title">Economia:</p>
            <p>Melhores taxas</p>
          </Col>
          <Col>
            <img src={smile} alt={t("general.appName")} />
            <p className="title">Facilidade:</p>
            <p>Tudo feito via WhatsApp</p>
          </Col>
          <Col>
            <img src={security} alt={t("general.appName")} />
            <p className="title">Segurança: </p>
            <p>Somos regulamentados pelo Banco Central</p>
          </Col>
          <Col>
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
