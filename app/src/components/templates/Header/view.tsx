import { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./styles.scss";

import logo from "../,,/../../../assets/images/favicon_soucred.png";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  showNavigation?: boolean;
  offset: number;
}

function Header({ offset, showNavigation = true }: HeaderProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const location = useLocation();
  const [t] = useTranslation();

  const closeMenu = (event: any, elementName: string) => {
    event.preventDefault();
    const scrollTop = document.getElementById(elementName)?.offsetTop || 0;
    window.scrollTo(0, scrollTop - 120 || 0);

    setIsNavCollapsed(false);
    return false;
  };
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const renderHREF = (path: string) => {
    return location.pathname === "/" ? path : `/${path}`;
  };

  return (
    <section className={`header ${offset > 30 ? "over" : ""}`} id="header">
      <Container>
        <Navbar expand="lg" expanded={isNavCollapsed} className="navbar">
          <Navbar.Brand>
            <Link className="title" to="/">
              <img src={logo} alt={t("general.appName")} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavCollapse}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Office")}
              href={renderHREF("#Office")}
            >
              Soluções
            </Nav.Link>
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Acting")}
              href={renderHREF("#Acting")}
            >
              Como funciona
            </Nav.Link>
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Team")}
              href={renderHREF("#Team")}
            >
              Simulador
            </Nav.Link>
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Contact")}
              href={renderHREF("#Contact")}
              className="last"
            >
              Ajuda
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
}

export default Header;
