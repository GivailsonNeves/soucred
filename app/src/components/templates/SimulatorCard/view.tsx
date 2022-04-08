import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import GreenButton from "../../molecules/greenButton/view";
import SimulatorPanel from "../../molecules/simulator-panel";
import Titles from "../../molecules/titles/view";

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
          />
          <p className="sub-title">*Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa aqui.</p>
          <GreenButton onClick={() => console.log("vai porco")}>AVANÇAR</GreenButton>
        </div>
      </Container>
    </section>
  );
};

export default SimulatorCard;
