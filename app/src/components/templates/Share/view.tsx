import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import logo from "../,,/../../../assets/images/2_logo.png";
import SocialLinks from "../../atoms/social-links";

import "./styles.scss";

export interface ShareProps {
  socialLinks: any;
}

const Share: React.FC<ShareProps> = ({ socialLinks }) => {
  const [t] = useTranslation();

  return (
    <section className="share-contents" id="share-contents">
      <Container>
        <h3>Compartilhe: </h3>
        <SocialLinks
          links={{
            facebook: "www.facebook.com",
            twitter: "www.twitter.com",
            linkedin: "www.linkedin.com",
            whatsapp: "+556199999999",
            telegran: "+556199999999",
          }}
        ></SocialLinks>
      </Container>
    </section>
  );
};

export default Share;
