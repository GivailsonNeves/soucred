import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SimulatorPanel from "../../molecules/simulator-panel";

const Simulators: React.FC = () => {
  const [t] = useTranslation();
  return (
    <section className="simulators" id="simulators">
      <Container>
        <SimulatorPanel
          title={t("simulator.what-is-your-value")}
          taxValue={1.59}
        />
        <SimulatorPanel
          title={t("simulator.how-much-you-need")}
          taxValue={1.99}
        />
      </Container>
    </section>
  );
};

export default Simulators;