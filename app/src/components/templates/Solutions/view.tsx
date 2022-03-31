import { useEffect, useState } from "react";
import { Container, Button, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import InfoCard from "../../molecules/info-card";

import "./styles.scss";

import celPhone from "../,,/../../../assets/images/img_3.png";
import cheks from "../,,/../../../assets/images/check.png";
import Titles from "../../molecules/titles/view";

interface SolutionsProps {
  showNavigation?: boolean;
}

function Solutions({ showNavigation = true }: SolutionsProps) {
  const [t] = useTranslation();

  return (
    <Container>
      <Row>
        <Titles
          greenText="Soluções"
          blackText="Precisa de dinheiro rápido?"
          blackTitleStyle={{ "width": "400px" }}
          subTitleText="Temos as melhores soluções pra você!"
        />
        <img src={celPhone} alt={t("general.appName")} />
      </Row>

      <Row>
        <div className="card-container">
          <Row>

            <InfoCard
              title="Saque-aniversário FGTS"
              middle="Quer antecipar seu saque-aniversário do FGTS? Aqui você pode antecipar até 7 anos e receber o dinheiro em até uma hora."
            >
            </InfoCard>
            <InfoCard
              title="Crédito consignado "
              miniTitle="(aposentados e pensionistas)"
              middle="Crédito rápido e superseguro para ambos os lados, descontando a prestação diretamente de seu salário/INSS."
            >
            </InfoCard>

            <Row>
              <InfoCard
                title="Crédito pessoal"
                middle="Seja para investir, pagar dívidas, ou para viajar, nós estamos com você nessa jornada. Faça uma simulação do valor e aproveite as vantagens:"
                secondMiddle="√ Pague em até 80x no boleto. √ Sem valor mínimo das parcelas. √ 30 dias para começar a pagar. √ Melhores taxas do mercado. √ Dinheiro na conta em até 48h."
              >
              </InfoCard>
              <InfoCard
                title="Crédito pessoal"
                middle="Seja para investir, pagar dívidas, ou para viajar, nós estamos com você nessa jornada. Faça uma simulação do valor e aproveite as vantagens:"
                secondMiddle="√ Pague em até 80x no boleto. √ Sem valor mínimo das parcelas. √ 30 dias para começar a pagar. √ Melhores taxas do mercado. √ Dinheiro na conta em até 48h."
              >
              </InfoCard>
            </Row>
          </Row>


        </div>
      </Row>

    </Container >
  );
}

export default Solutions;
