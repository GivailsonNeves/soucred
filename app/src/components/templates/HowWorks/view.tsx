import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GreenButton from "../../molecules/greenButton/view";

import "./styles.scss";

import identity from "../,,/../../../assets/images/check.png";
import chek from "../,,/../../../assets/images/check.png";
import time from "../,,/../../../assets/images/check.png";
import invoice from "../,,/../../../assets/images/check.png";
import invoiceHome from "../,,/../../../assets/images/check.png";
import Titles from "../../molecules/titles/view";

interface HowWorksProps {
  showNavigation?: boolean;
}

function HowWorks({ showNavigation = true }: HowWorksProps) {
  const [t] = useTranslation();

  return (
    <Container>
      <div className="how-works">
        <Titles
          greenText="Como funciona?"
          blackText="O processo é dividido em etapas, começando pela análise dos seus documentos:"
          blackTitleStyle={{ "width": "800px" }}
        />




        <div className="documents">
          <p>Saque-aniversário FGTS:</p>
          <div className="images">
            <div className="object">
              <img src={identity} alt={t("general.appName")} />
              <p>Documento de identificação pessoal.</p>
            </div>
            <div className="object">
              <img src={chek} alt={t("general.appName")} />
              <p>Aceite no aplicativo da Caixa.</p>
            </div>
            <div className="object">
              <img src={time} alt={t("general.appName")} />
              <p>Em menos de uma hora receba o pix na sua conta.</p>
            </div>
          </div>
        </div>

        <p></p>
        <div className="documents">
          <p>Crédito pessoal e consignado:</p>
          <div className="images">
            <div className="object">
              <img src={identity} alt={t("general.appName")} />
              <p>Comprovante de renda.</p>
            </div>
            <div className="object">
              <img src={chek} alt={t("general.appName")} />
              <p>Comprovante de residência.</p>
            </div>
            <div className="object">
              <img src={time} alt={t("general.appName")} />
              <p>Documento de identificação pessoal.</p>
            </div>
          </div>
        </div>




        <div className="firsInfo">
          <p>Entre a validação dos documentos e a aprovação da proposta, o dinheiro cai na sua conta em até 48h.</p>
          <p> Quer ver como é fácil e rápido?</p>
        </div>

        <GreenButton
          style={{ "margin": "20px 0 0 0" }}
          onClick={() => console.log('vai porco')}
        />

        <div className="info">
          <p>Fique atento aos golpes: a Soucred não solicita nenhum tipo de depósito antecipado para liberar o seu crédito.</p>
        </div>
      </div>
    </Container>
  );
}

export default HowWorks;
