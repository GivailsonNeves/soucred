import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GreenButton from "../../molecules/greenButton/view";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import celPhone from "../,,/../../../assets/images/mockup_celular.png";

interface DoubtsProps {
  showNavigation?: boolean;
}

function Doubts({ showNavigation = true }: DoubtsProps) {
  const [t] = useTranslation();

  return (
    <section className="doubts" id="doubts">
      <Container>
        <img src={celPhone} alt={t("general.appName")} />
        <div>
          <h2>Dúvidas?</h2>
          <h4>
            Estamos on no WhatsApp de segunda a sexta das 8h às 18h. É só chamar
            que a gente responde na hora pra agilizar o seu lado.
          </h4>
          <div>
            <GreenButton>CHAMA NO ZAP</GreenButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Doubts;
