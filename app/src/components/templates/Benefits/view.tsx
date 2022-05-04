import { Container } from "react-bootstrap";
import economy from "../../../assets/images/noun-economy-1588814.png";
import fast from "../../../assets/images/noun-fast-316759.png";
import flexible from "../../../assets/images/noun-flexible-payments-4362169.png";
import security from "../../../assets/images/noun-security-4695893.png";
import smile from "../../../assets/images/noun-smile-1285220.png";
import BenefitsItem from "../../atoms/BenefitsItem";
import { BenefitsItemProps } from "../../atoms/BenefitsItem/view";
import "./styles.scss";

interface BenefitsProps {
  showNavigation?: boolean;
}

const benefits: BenefitsItemProps[] = [
  {
    imgPath: fast,
    title: "Agilidade",
    text: "Dinheiro na conta em menos de 1 hora*",
  },
  {
    imgPath: economy,
    title: "Economia",
    text: "Melhores taxas",
  },
  {
    imgPath: smile,
    title: "Facilidade",
    text: "Tudo feito via WhatsApp",
  },
  {
    imgPath: security,
    title: "Segurança",
    text: "Somos regulamentados pelo Banco Central",
  },
  {
    imgPath: flexible,
    title: "Flexibilidade",
    text: "Sem valor mínimo das parcelas",
  },
];

function Benefits({ showNavigation = true }: BenefitsProps) {
  return (
    <section className="benefits" id="benefits">
      <Container>
        <h2>Só vi vantagens</h2>
        <div className="benefits-content">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <BenefitsItem {...benefit} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
