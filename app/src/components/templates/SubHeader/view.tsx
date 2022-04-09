import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./styles.scss";

import base from "../,,/../../../assets/images/base.png";
import SubHeaderMolecule from "../../molecules/sub-header-molecule/view";

function SubHeader() {
  const [t] = useTranslation();

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
}

export default SubHeader;
