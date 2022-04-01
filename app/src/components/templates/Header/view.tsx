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
          <Col xs={12} md={5} lg={5}>
            <img src={logo} alt={t("general.appName")} />
          </Col>
          <Col xs={12} md={7} lg={7}>
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
