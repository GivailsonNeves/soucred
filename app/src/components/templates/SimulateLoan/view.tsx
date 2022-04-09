import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import SimulatorPanel from "../../molecules/simulator-panel";

import "./styles.scss";
import SignUpMolecule from "../../molecules/sign-up-molecule/view";

const SimulateLoan: React.FC = () => {
  const [t] = useTranslation();
  return (
    <section className="simulate-loan" id="simulate-loan">
      <Container>
        <div className="statement">
          <h2>Faça uma simulação do valor e aproveite as vantagens:</h2>
          <div>
            <p>√ Pague em até 80x no boleto.</p>
            <p>√ Sem valor mínimo das parcelas.</p>
            <p>√ 30 dias para começar a pagar.</p>
            <p>√ Melhores taxas do mercado.</p>
            <p>√ Dinheiro na conta em até 48h.</p>
          </div>

        </div>



        <div className="group-btn">
          <div className="button"><p>1</p> Simulador</div>
          <div className="button"><p>2</p>Cadastro</div>
          <div className="button"><p>3</p>Resultado</div>
        </div>



        <div className="cardSimulator">
          <SimulatorPanel
            title="De quanto você precisa?"
            taxValue={2.14}
          />
        </div>

        <SignUpMolecule
          numInstallments={[80, 70, 60]}
        ></SignUpMolecule>

        <div className="base-sub-title">
          <p>Essas parcelas podem ser ainda melhores.</p>
          <p>Envie seus documentos e faça sua simulação personalizada.</p>
        </div>
      </Container>
    </section>
  );
};

export default SimulateLoan;
