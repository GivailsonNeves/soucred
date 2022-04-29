import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import celphone from "../,,/../../../assets/images/maopequena.png";
import MoneyField from "../../atoms/money-field";
import SignUpMolecule from "../../molecules/sign-up-molecule/view";
import GroupButton from "../../molecules/group-button";
import SimulatorPanel from "../../molecules/simulator-panel";
import "./styles.scss";

const SimulateLoan: React.FC = () => {
  const [t] = useTranslation();
  const [step, setStep] = useState<number>(0);
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
        <GroupButton step={step} onStepSelect={setStep} />

        {step === 0 && (
          <div className="firt-tab">
            <div className="cardSimulator">
              <SimulatorPanel title="De quanto você precisa?" taxValue={2.14} />
            </div>
            <SignUpMolecule
              onSignup={() => setStep(1)}
              numInstallments={[80, 70, 60]}
            ></SignUpMolecule>
            <div className="base-sub-title">
              <p>Essas parcelas podem ser ainda melhores.</p>
              <p>Envie seus documentos e faça sua simulação personalizada.</p>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="second-tab">
            <Form className="form-data">
              <Form.Group
                className="input-field input-field-one sm"
                controlId="name"
              >
                <Form.Label>Seu nome:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="input-field input-field-two sm"
                controlId="whatapp"
              >
                <Form.Label>Seu WhatsApp:</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>
              <Form.Group
                className="input-field input-field-three sm"
                controlId="email"
              >
                <Form.Label>Seu e-mail:</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group
                className="input-field input-field-four sm"
                controlId="email"
              >
                <Form.Label>Qual o valor desejado?</Form.Label>
                <MoneyField></MoneyField>
              </Form.Group>
              <Form.Group
                className="input-field input-field-five sm"
                controlId="email"
              >
                <Form.Label>Em quantas parcelas deseja pagar?</Form.Label>
                <MoneyField></MoneyField>
              </Form.Group>
              <Form.Group
                className="input-field input-field-six sm"
                controlId="email"
              >
                <Form.Label>Comprovante de renda</Form.Label>
                <Button>ANEXAR</Button>
              </Form.Group>
              <Form.Group
                className="input-field input-field-seven sm"
                controlId="email"
              >
                <Form.Label>Comprovante de residência</Form.Label>
                <Button>ANEXAR</Button>
              </Form.Group>
              <Form.Group
                className="input-field input-field-eight sm"
                controlId="email"
              >
                <Form.Label>Comprovante de residência</Form.Label>
                <Button>ANEXAR</Button>
              </Form.Group>
              <div className="send-container">
                <Button
                  type="button"
                  className="send"
                  onClick={() => setStep(2)}
                >
                  ENVIAR
                </Button>
              </div>
            </Form>
          </div>
        )}

        {step === 2 && (
          <div className="third-tab">
            <div className="container">
              <img src={celphone} />
              <div className="tanks">
                <p>
                  Obrigado por enviar seus documentos! Entraremos em contato
                  muito em breve via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SimulateLoan;
