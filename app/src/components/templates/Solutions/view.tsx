import { useEffect, useState } from "react";
import { Container, Button, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import celPhone from "../,,/../../../assets/images/img_3.png";
import cheks from "../,,/../../../assets/images/check.png";

interface SolutionsProps {
  showNavigation?: boolean;
}

function Solutions({ showNavigation = true }: SolutionsProps) {
  const [t] = useTranslation();

  return (
    <Container>
      <Row>
        <Col>
          <div className="solutions">
            <p>Soluções</p>
            <p className="meio">Precisa de dinheiro rápido?</p>
            <p>Temos as melhores soluções pra você!</p>
            <img src={celPhone} alt={t("general.appName")} />
          </div>
        </Col>
        <Col>
          <div>
            componentes
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default Solutions;
