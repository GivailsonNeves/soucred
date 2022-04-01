import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

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
          <Col sm={12} md={6}>
            <h4>Na SouCred é assim:</h4>
            <h1>
              mensagem no Zap, dinheiro na conta.
              <img src={cheks} alt={t("general.appName")} />
            </h1>
            <p>
              Temos diversas soluções de crédito de acordo com a sua
              necessidade, com as melhores taxas e com todo o processo feito via
              WhatsApp.
              <GreenButton>CONHEÇA NOSSAS SOLUÇÕES.</GreenButton>
            </p>
          </Col>
          <Col sm={12} md={6}>
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
