import { Container } from "react-bootstrap";
import base from "../,,/../../../assets/images/base.png";
import SubHeaderMolecule from "../../molecules/sub-header-molecule/view";
import "./styles.scss";

export interface SubHeaderSimulationProps {
  title: string;
  subTitle?: string;
  subTitle2?: string;
}

const SubHeaderSimulation: React.FC<SubHeaderSimulationProps> = ({
  title,
  subTitle,
  subTitle2,
}) => {
  return (
    <section className="sub-header-simulation" id="sub-header-simulation">
      <Container>
        <SubHeaderMolecule
          title={title}
          subTitle={subTitle}
          subTitle2={subTitle2}
          picture={base}
        ></SubHeaderMolecule>
      </Container>
    </section>
  );
};

export default SubHeaderSimulation;
