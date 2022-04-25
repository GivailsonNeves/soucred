import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import logo from "../,,/../../../assets/images/2_logo.png";

import "./styles.scss";

export interface ShareProps {
  socialLinks: any;
}

const Share: React.FC<ShareProps> = ({ socialLinks }) => {
  const [t] = useTranslation();

  return (
    <Container>
      <div className="call">

      </div>
      <div className="links">
        <div>
          <a href="#">Política de privacidade</a>
          <span></span>
          <a href="#">Termos de uso</a>
        </div>
        <img src={logo} alt={t("general.appName")} />
      </div>
    </Container>
  );
};

export default Share;
