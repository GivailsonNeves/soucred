import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GreenButton from "../../molecules/greenButton/view";
import SimulatorPanel from "../../molecules/simulator-panel";
import "./styles.scss";

const SimulatorCard: React.FC = () => {
  const [t] = useTranslation();
  return (
    <section className="simulator-card" id="simulator-card">
      <Container>
        <div className="cardSimulator">
          <SimulatorPanel
            title={t("simulator.what-is-your-value")}
            taxValue={1.59}
            type="saque-aniversario"
          />
          <p className="sub-title">
            *Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa aqui.
          </p>
          <GreenButton onClick={() => console.log("")}>AVANÇAR</GreenButton>
        </div>
      </Container>
    </section>
  );
};

export default SimulatorCard;
