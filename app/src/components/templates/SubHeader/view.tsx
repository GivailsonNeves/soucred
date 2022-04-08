import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SubHeaderMolecule from "../../molecules/sub-header-molecule/view";

import "./styles.scss";

import base from "../,,/../../../assets/images/base.png";

function SubHeader() {
  const [t] = useTranslation();

  return (
    <section className="sub-header" id="sub-header">
      <Container>
        <SubHeaderMolecule
          title="Saque-aniversário do FGTS"
          subTitle="Que tal ter dinheiro agora sem comprometer sua renda mensal?"
          baseTitle="Faça uma simulação de quanto você pode liberar no seu FGTS."
          picture={base}
        ></SubHeaderMolecule>
      </Container>
    </section>
  );
}

export default SubHeader;
