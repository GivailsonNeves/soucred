import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GreenButton from "../../molecules/greenButton/view";
import SimulatorPanel from "../../molecules/simulator-panel";
import "./styles.scss";

export interface SimulatorCardProps {
  value?: any;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({ value }) => {
  const [t] = useTranslation();
  return (
    <section className="simulator-card" id="simulator-card">
      <Container>
        <div className="cardSimulator">
          <SimulatorPanel
            title={t("simulator.what-is-your-value")}
            taxValue={1.59}
            type="saque-aniversario"
            defaultValue={value}
          />
          <p className="sub-title">
            *Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa{" "}
            <a
              href="https://www.caixa.gov.br/beneficios-trabalhador/fgts/Paginas/default.aspx"
              target="_blank"
            >
              aqui
            </a>
            .
          </p>
          <GreenButton
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=+5561996517829&text=Olá, gostaria de obter informações sobre o Saque-aniversário do FGTS no valor dê R$ ${value}`}
          >
            CHAMA NO ZAP
          </GreenButton>
        </div>
      </Container>
    </section>
  );
};

export default SimulatorCard;
