import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import celPhone from "../,,/../../../assets/images/mockup_celular.png";
import GreenButton from "../../molecules/greenButton/view";
import "./styles.scss";

interface DoubtsProps {
  showNavigation?: boolean;
}

function Doubts({ showNavigation = true }: DoubtsProps) {
  const [t] = useTranslation();

  return (
    <section className="doubts" id="doubts">
      <Container>
        <img src={celPhone} alt={t("general.appName")} />
        <div>
          <h2>Dúvidas?</h2>
          <h4>
            Estamos on no WhatsApp de segunda a sexta das 8h às 18h. É só chamar
            que a gente responde na hora pra agilizar o seu lado.
          </h4>
          <div>
            <GreenButton
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+5561996517829&text=Olá!"
            >
              CHAMA NO ZAP
            </GreenButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Doubts;
