import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SubHeaderMolecule from "../../molecules/sub-header-molecule/view";

import "./styles.scss";

import base from "../,,/../../../assets/images/base.png";

function SubHeaderSimulation() {
  const [t] = useTranslation();

  return (
    <section className="sub-header-simulation" id="sub-header-simulation">
      <Container>
        <SubHeaderMolecule
          title="Empréstimo Consignado"
          subTitle="Empréstimo rápido e seguro? Chama no Zap."
          baseTitle="*Aceitamos negativados."
          picture={base}
        ></SubHeaderMolecule>
      </Container>
    </section>
  );
}

export default SubHeaderSimulation;
