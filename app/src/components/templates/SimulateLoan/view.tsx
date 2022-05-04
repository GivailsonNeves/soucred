import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import celphone from "../,,/../../../assets/images/maopequena.png";
import MoneyField from "../../atoms/money-field";
import GroupButton from "../../molecules/group-button";
import SignUpMolecule from "../../molecules/sign-up-molecule/view";
import SimulatorPanel from "../../molecules/simulator-panel";
import InputMask from "react-input-mask";
import "./styles.scss";
import { UtilsNavigator } from "../../../utils";

export interface SimulateLoanProps {
  type: string;
  call: string;
  subCall?: string;
  taxValue?: number;
}

const SimulateLoan: React.FC<SimulateLoanProps> = ({
  call,
  taxValue,
  subCall,
  type,
}) => {
  const [step, setStep] = useState<number>(0);
  const [busy, setBusy] = useState<boolean>(false);
  return (
    <section className="simulate-loan" id="simulate-loan">
      <Container>
        <div className="statement">
          <h2>{call}</h2>
          <div>
            <p>√ Pague em até 80x no boleto.</p>
            <p>√ Sem valor mínimo das parcelas.</p>
            <p>√ 30 dias para começar a pagar.</p>
            <p>√ Melhores taxas do mercado.</p>
            <p>√ Dinheiro na conta em até 48h.</p>
          </div>
        </div>

        {type !== "financiamento" && (
          <>
            <GroupButton
              step={step}
              onStepSelect={(step) => setStep(Math.min(step, 1))}
            />
            {step === 0 && (
              <div className="firt-tab">
                <div className="cardSimulator">
                  <SimulatorPanel
                    title="De quanto você precisa?"
                    taxValue={taxValue || 0}
                    type={type}
                  />
                </div>
                <SignUpMolecule
                  parcelValue="0,00"
                  onSignup={() => setStep(1)}
                  value={12}
                ></SignUpMolecule>
                {subCall && (
                  <div
                    className="base-sub-title"
                    dangerouslySetInnerHTML={{ __html: subCall }}
                  />
                )}
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
                    <InputMask className="whatsapp-number" mask="99999-9999" />
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
                    <label className="file-input">
                      ANEXAR <input type="file" />
                    </label>
                  </Form.Group>
                  <Form.Group
                    className="input-field input-field-seven sm"
                    controlId="email"
                  >
                    <Form.Label>Comprovante de residência</Form.Label>
                    <label className="file-input">
                      ANEXAR <input type="file" />
                    </label>
                  </Form.Group>
                  <Form.Group
                    className="input-field input-field-eight sm"
                    controlId="email"
                  >
                    <Form.Label>Comprovante de residência</Form.Label>
                    <label className="file-input">
                      ANEXAR <input type="file" />
                    </label>
                  </Form.Group>
                  <Form.Group
                    className="input-field input-field-eight sm"
                    controlId="email"
                  >
                    <Form.Label>
                      Documento de identificação <small>(RG ou CNH)</small>
                    </Form.Label>
                    <label className="file-input">
                      ANEXAR <input type="file" />
                    </label>
                  </Form.Group>
                  <div className="send-container">
                    <Button
                      type="button"
                      className="send"
                      disabled={busy}
                      onClick={() => {
                        setBusy(true);
                        setTimeout(() => {
                          setBusy(false);
                          setStep(2);
                          UtilsNavigator.gotoTop();
                        }, 2000);
                      }}
                    >
                      {!busy ? "ENVIAR" : "AGUARDE"}
                    </Button>
                  </div>
                </Form>
              </div>
            )}

            {step === 2 && (
              <div className="third-tab">
                <div className="container">
                  <img src={celphone} alt="Telefone" />
                  <div className="tanks">
                    <p>
                      Obrigado por enviar seus documentos! Entraremos em contato
                      muito em breve via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default SimulateLoan;
