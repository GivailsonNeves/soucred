import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/favicon_soucred.png";
import "./styles.scss";

interface HeaderBlogProps {
  showNavigation?: boolean;
  offset: number;
}

function HeaderBlog({ offset, showNavigation = true }: HeaderBlogProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [t] = useTranslation();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
            <Nav.Link href="/blog" className="last">
              Blog
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
}

export default HeaderBlog;
