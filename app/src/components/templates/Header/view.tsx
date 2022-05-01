import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "../,,/../../../assets/images/favicon_soucred.png";
import { UtilsNavigator } from "../../../utils";
import "./styles.scss";

interface HeaderProps {
  offset: number;
}

function Header({ offset }: HeaderProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const location = useLocation();
  const [t] = useTranslation();

  const isHome = location.pathname === "/";

  const closeMenu = (event: any, elementName: string) => {
    if (isHome) {
      event.preventDefault();
      UtilsNavigator.gotoSectionName(elementName);
      setIsNavCollapsed(false);
    } else {
      UtilsNavigator.gotoSectionName("/");
    }
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
            <Link
              className="title"
              to="/"
              onClick={(event: any) => closeMenu(event, "")}
              href={renderHREF("/")}
            >
              <img src={logo} alt={t("general.appName")} />
            </Link>
          </Navbar.Brand>
          {isHome && (
            <>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={handleNavCollapse}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link
                  onClick={(event: any) => closeMenu(event, "solution-section")}
                  href={renderHREF("#solution-section")}
                >
                  Soluções
                </Nav.Link>
                <Nav.Link
                  onClick={(event: any) => closeMenu(event, "how-works")}
                  href={renderHREF("#how-works")}
                >
                  Como funciona
                </Nav.Link>
                <Nav.Link
                  onClick={(event: any) => closeMenu(event, "simulator")}
                  href={renderHREF("#simulator")}
                >
                  Simulador
                </Nav.Link>
                <Nav.Link
                  onClick={(event: any) => closeMenu(event, "doubts")}
                  href={renderHREF("#doubts")}
                >
                  Ajuda
                </Nav.Link>
                <Nav.Link href={renderHREF("/blog")} className="last">
                  Blog
                </Nav.Link>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </Container>
    </section>
  );
}

export default Header;
