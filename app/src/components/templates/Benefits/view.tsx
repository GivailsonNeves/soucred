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
import { BenefitsItemProps } from "../../atoms/BenefitsItem/view";

interface BenefitsProps {
  showNavigation?: boolean;
}

const benefits: BenefitsItemProps[] = [
  {
    imgPath: fast,
    title: "Agilidade",
    text: "Dinheiro na conta em menos de 1 hora*",
  },
  {
    imgPath: economy,
    title: "Economia",
    text: "Melhores taxas",
  },
  {
    imgPath: smile,
    title: "Facilidade",
    text: "Tudo feito via WhatsApp",
  },
  {
    imgPath: security,
    title: "Segurança",
    text: "Somos regulamentados pelo Banco Central",
  },
  {
    imgPath: flexible,
    title: "Flexibilidade",
    text: "Sem valor mínimo das parcelas",
  },
];

function Benefits({ showNavigation = true }: BenefitsProps) {
  const [t] = useTranslation();

  return (
    <section className="benefits" id="benefits">
      <Container>
        <h2>Só vi vantagens</h2>
        <div className="benefits-content">
          {benefits.map((benefit) => (
            <div>
              <BenefitsItem {...benefit} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
