import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import MoneyField from "../../atoms/money-field";
import ParcelField from "../../atoms/parcel-field";
import GreenButton from "../../molecules/greenButton/view";
import InputMask from "react-input-mask";
import "./styles.scss";

export interface FgtsWidrawProps {}
const FgtsWidraw: React.FC<FgtsWidrawProps> = () => {
  const [t] = useTranslation();
  const [value, setValue] = useState<any>();
  const [step, setStep] = useState<number>(0);
  const [years, setyears] = useState<number>(0);
  const history = useHistory();

  const handleFoward = () => {
    setStep(step + 1);
  };

  const steps = [
    {
      title: "Qual o seu saldo",
    },
    {
      title: "Esse saldo corresponde",
    },
    {
      title: "Qual a data do seu aniversário?",
    },
    {
      title: "Qual seu zap?",
    },
    {
      title: "Você pode receber até:",
    },
  ];

  return (
    <>
      <div className="cardSimulator">
        <div className="simulator-panel">
          <h3>{steps[step].title}</h3>
          {step === 0 && (
            <MoneyField defaultValue={50} onChangeValue={(value) => {}} />
          )}
          {step === 1 && <ParcelField value={years} onChangeValue={setyears} />}
          {step === 2 && (
            <>
              <InputMask className="whatsapp-number" mask="99/99/9999" />
              <br />
              <br />
            </>
          )}
          {step === 3 && (
            <>
              <InputMask className="whatsapp-number" mask="99999-9999" />
              <br />
              <br />
            </>
          )}
          {step === 4 && (
            <>
              <p>R$ 4.000,00</p>
              <p>
                E esse dinheiro pode ir pra sua
                <br />
                conta em menos de 1 hora*.
              </p>
              <br />
              <br />
            </>
          )}
          {step < 2 && (
            <p>{t("simulator.tax-text").replace("{tax-value}", "1,69")}</p>
          )}
        </div>
        {step === 4 ? (
          <GreenButton
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+5561996517829&text=Olá!"
          >
            CHAMA NO ZAP
          </GreenButton>
        ) : (
          <GreenButton onClick={handleFoward}>AVANÇAR</GreenButton>
        )}
        {step >= 2 && <p>Refazer simulação</p>}
      </div>
      <p className="sub-title" style={{ paddingTop: 20 }}>
        *Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa{" "}
        <a
          href="https://www.caixa.gov.br/atendimento/aplicativos/fgts/Paginas/default.aspx#video"
          target="_blank"
        >
          aqui
        </a>
        .
      </p>
    </>
  );
};

export default FgtsWidraw;
