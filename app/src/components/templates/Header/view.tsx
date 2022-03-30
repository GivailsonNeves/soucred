import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import logo from "../,,/../../../assets/images/favicon_soucred.png";

interface HeaderProps {
  showNavigation?: boolean;
}

function Header({ showNavigation = true }: HeaderProps) {
  const [t] = useTranslation();

  return (
    <Container>
      <div className="header">
        <div className="links">
            <img src={logo} alt={t("general.appName")} />
          <div>
            <a href="#">Soluções</a>
            <a href="#">Como funciona</a>
            <a href="#">Simulador</a>
            <a href="#">Ajuda</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
