import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./styles.scss";

import base from "../,,/../../../assets/images/base.png";
import SubHeaderMolecule from "../../molecules/sub-header-molecule/view";

function SubHeaderSimulation() {
  const [t] = useTranslation();

  return (
    <section className="sub-header-simulation" id="sub-header-simulation">
      <Container>
        <SubHeaderMolecule
          title="Empréstimo Consignado"
          subTitle="Empréstimo rápido e seguro? "
          subTitle2="Chama no Zap."
          baseTitle="*Aceitamos negativados."
          picture={base}
        ></SubHeaderMolecule>
      </Container>
    </section>
  );
}

export default SubHeaderSimulation;
