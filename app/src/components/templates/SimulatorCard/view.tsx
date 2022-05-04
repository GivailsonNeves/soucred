import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import GreenButton from "../../molecules/greenButton/view";
import SimulatorPanel from "../../molecules/simulator-panel";
import "./styles.scss";

export interface SimulatorCardProps {
  value?: any;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({ value }) => {
  const [t] = useTranslation();
  const history = useHistory();
  return (
    <section className="simulator-card" id="simulator-card">
      <Container>
        <div className="cardSimulator">
          <SimulatorPanel
            title={t("simulator.what-is-your-value")}
            taxValue={1.69}
            type="saque-aniversario"
            defaultValue={value}
          />
          <p className="sub-title">
            *Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa{" "}
            <a
              href="https://www.caixa.gov.br/beneficios-trabalhador/fgts/Paginas/default.aspx"
              target="_blank"
              rel="noreferrer"
            >
              aqui
            </a>
            .
          </p>
          <GreenButton onClick={() => history.push("/credito/fgts")}>
            AVANÇAR
          </GreenButton>
        </div>
      </Container>
    </section>
  );
};

export default SimulatorCard;
