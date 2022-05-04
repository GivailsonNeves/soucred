import { Container } from "react-bootstrap";

import "./styles.scss";

import base from "../../../assets/images/base.png";
import SubHeaderMolecule from "../../molecules/sub-header-molecule/view";

const SubHeader: React.FC = () => {
  return (
    <section className="sub-header" id="sub-header">
      <Container>
        <SubHeaderMolecule
          title="Saque-aniversário do FGTS"
          subTitle="Que tal ter dinheiro agora sem comprometer sua renda mensal?"
          subTitle2="Faça uma simulação de quanto você pode liberar no seu FGTS."
          picture={base}
        ></SubHeaderMolecule>
      </Container>
    </section>
  );
};

export default SubHeader;
