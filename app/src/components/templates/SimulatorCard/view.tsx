import { Container } from "react-bootstrap";
import FgtsWidraw from "../../organisms/fgts-widraw";
import "./styles.scss";

export interface SimulatorCardProps {
  value?: any;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({ value }) => {
  return (
    <section className="simulator-card" id="simulator-card">
      <Container>
        <FgtsWidraw />
      </Container>
    </section>
  );
};

export default SimulatorCard;
