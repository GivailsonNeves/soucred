import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Explication from "../../molecules/explication/view";
import GreenButton from "../../molecules/greenButton/view";

import "./styles.scss";

import interrogation from "../,,/../../../assets/images/Grupo_45.png";
import person from "../,,/../../../assets/images/Caminho32.png";
import plus from "../,,/../../../assets/images/Grupo46.png";
import celphone from "../,,/../../../assets/images/maopequena.png";

interface ExplanationProps {
  showNavigation?: boolean;
}

function Explanation({ showNavigation = true }: ExplanationProps) {
  const [t] = useTranslation();

  return (
    <section className="explanation" id="explanation">
      <Container>

        <div className="explication-card">
          <Explication
            picture={interrogation}
            title="O que é a antecipação do saque-aniversário?"
          />
          <h4>É uma nova opção de crédito para quem precisa de dinheiro rápido e não deseja comprometer a renda mensal.</h4>
          <h5>*Antecipe até 7 parcelas do seu saque sem valor mínimo com taxas a partir de 1,69% ao mês.</h5>
          <h5>*Aceitamos negativados</h5>
        </div>

        <div className="explication-card">
          <Explication
            picture={person}
            title="Quem pode optar pela antecipação do saque-aniversário?"
          />
          <h4>• Tem a opção saque-aniversário ativa.</h4>
          <h4>• Tem conta corrente ou poupança. </h4>
          <h4>• Tem saldo do FGTS em conta ativa ou inativa. </h4>
          <h4>• Maior de 18 anos.</h4>
        </div>


        <div className="explication-card last">
          <Explication
            picture={plus}
            title="Quais as vantagens do saque-aniversário?"
          />
          <h4>• Taxas a partir de 1,69%/mês. </h4>
          <h3>Valores competitivos no mercado. </h3>

          <h4>• Sem valor mínimo para saque. </h4>
          <h3> Processo seguro e dinheiro na conta em até 1h, tudo via WhatsApp. </h3>

          <h4>• Não compromete a sua renda. </h4>
          <h3> O valor das parcelas é descontado diretamente do seu FGTS anual.</h3>

        </div>

        <div className="explanation-footer">
          <div>
            <img src={celphone} />
            <GreenButton>CHAMA NO ZAP</GreenButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Explanation;
