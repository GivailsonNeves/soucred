import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GreenButton from "../../molecules/greenButton/view";
import SimulatorPanel from "../../molecules/simulator-panel";
import Titles from "../../molecules/titles/view";

import "./styles.scss";

const Simulators: React.FC = () => {
  const [t] = useTranslation();
  return (
    <Container>
      <div className="simulator">
        <div>
          <Titles
            greenText="Simulador"
            greenTitleStyle={{ "width": "200px" }}
            blackText="Saque-aniversário do FGTS"
            subTitleText="Que tal ter dinheiro agora sem comprometer sua renda mensal? Antecipe até 7 anos do seu saque-aniversário."
            subTitleStyle={{ "width": "424px" }}
          />
        </div>
        <div className="cardSimulator">
          <SimulatorPanel
            title={t("simulator.what-is-your-value")}
            taxValue={1.59}
          />
          <GreenButton
            title="AVANÇAR"
            style={{
              "display": "flex",
              "align-items": "center",
              "margin": "auto",
              "flex-direction": "column",
              "justify-content": "space-evenly",
            }}
            onClick={() => console.log('vai porco')}
          />
        </div>
      </div>

      <div className="simulator">
        <div>
          <Titles
            blackText="Quer simular as parcelas de um empréstimo pessoal ou consignado?"
            blackTitleStyle={{ "width": "370px" }}
            subTitleText="Envie seus documentos para análise e a gente te retorna rapidinho via WhatsApp."
            subTitleStyle={{ "width": "370px" }}
          />
        </div>
        <div className="cardSimulator">
          <SimulatorPanel
            title={t("simulator.what-is-your-value")}
            taxValue={1.59}
          />
          <GreenButton
            title="AVANÇAR"
            style={{
              "display": "flex",
              "align-items": "center",
              "margin": "auto",
              "flex-direction": "column",
              "justify-content": "space-evenly",
            }}
            onClick={() => console.log('vai porco')}
          />
        </div>
      </div>



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

    </Container>
  );
};

export default Simulators;
