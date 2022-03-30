import { useEffect, useState } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import logo from "../,,/../../../assets/images/img_3.png";
import cheks from "../,,/../../../assets/images/check.png";

interface IntroductionProps {
  showNavigation?: boolean;
}

function Introduction({ showNavigation = true }: IntroductionProps) {
  const [t] = useTranslation();

  return (
    <Container>
      <div className="introduction">
          <div>
            <p>Na SouCred é assim:</p>
            <div>
              <p className="title">mensagem no Zap, dinheiro na conta.</p>
              <img src={cheks} alt={t("general.appName")} />
            </div>
            <p>Temos diversas soluções de crédito de acordo com a sua necessidade, com as melhores taxas e com todo o processo feito via WhatsApp.</p>
            <Button>
              CONHEÇA NOSSAS SOLUÇÕES.
            </Button>
          </div>
          <div>
            <img src={logo} alt={t("general.appName")} />
          </div>
        </div>
    </Container>
  );
}

export default Introduction;
