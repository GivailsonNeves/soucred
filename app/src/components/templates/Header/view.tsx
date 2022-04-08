import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./styles.scss";

import logo from "../,,/../../../assets/images/favicon_soucred.png";

interface HeaderProps {
  showNavigation?: boolean;
}

function Header({ showNavigation = true }: HeaderProps) {
  const [t] = useTranslation();

  return (
    <section className="header" id="header">
      <Container>
        <Row>
          <Col xs={3} md={3} lg={3}>
            <a href="/"><img src={logo} alt={t("general.appName")} /></a>
          </Col>
          <Col xs={9} md={9} lg={9}>
            <div className="links">
              <a href="#">Soluções</a>
              <a href="#">Como funciona</a>
              <a href="#">Simulador</a>
              <a href="#">Ajuda</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
