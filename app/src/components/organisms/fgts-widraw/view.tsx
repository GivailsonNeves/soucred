import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import InputMask from "react-input-mask";
import CalendarIcon from "../../../assets/images/icon-calendar.png";
import WhatzappIcon from "../../../assets/images/icon-whatzapp.png";
import MoneyField from "../../atoms/money-field";
import ParcelField from "../../atoms/parcel-field";
import GreenButton from "../../molecules/greenButton/view";
import "./styles.scss";

export interface FgtsWidrawProps {}
const FgtsWidraw: React.FC<FgtsWidrawProps> = () => {
  const [t] = useTranslation();
  const [value, setValue] = useState<any>(0);
  const [step, setStep] = useState<number>(0);
  const [years, setyears] = useState<number>(0);
  const [phone, setPhone] = useState<string>("");
  const [birthDay, setBirthDay] = useState<string>("");

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
  const resetSimulation = () => {
    setStep(0);
    setValue(0);
    setyears(1);
    setValue("0,000");
    setPhone("");
    setBirthDay("");
  };

  const isDisabled = () => {
    if (step === 0 && value === "0,00") return true;
    if (step === 1 && years === 0) return true;
    if (step === 2 && birthDay === "") return true;
    if (step === 3 && phone === "") return true;
  };
  return (
    <div className="fgts-w">
      <div className="cardSimulator">
        <div className="simulator-panel">
          <h3>{steps[step].title}</h3>
          {step === 0 && (
            <MoneyField defaultValue={value} onChangeValue={setValue} />
          )}
          {step === 1 && (
            <ParcelField value={years} sufix="anos" onChangeValue={setyears} />
          )}
          {step === 2 && (
            <div className="field-inpug">
              <InputMask
                className="whatsapp-number"
                value={birthDay}
                onChange={(e: ChangeEvent<{ value: string }>) =>
                  setBirthDay(e.target.value)
                }
                mask="99/99/9999"
              />
              <img src={CalendarIcon} alt="Calendário" />
            </div>
          )}
          {step === 3 && (
            <div className="field-inpug">
              <InputMask
                className="whatsapp-number"
                value={phone}
                onChange={(e: ChangeEvent<{ value: string }>) =>
                  setPhone(e.target.value)
                }
                mask="(99) 99999-9999"
              />
              <img src={WhatzappIcon} alt="Zap" />
            </div>
          )}
          {step === 4 && (
            <div className="result">
              <h2>
                <strong>R$ 4.000,00</strong>
              </h2>
              <p>
                E esse dinheiro pode ir pra sua
                <br />
                conta em menos de 1 hora*.
              </p>
              <br />
              <br />
            </div>
          )}
          {step < 2 && (
            <p>{t("simulator.tax-text").replace("{tax-value}", "1,69")}</p>
          )}
        </div>
        {step === 4 ? (
          <GreenButton
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+5561996517829&text=Olá!"
          >
            CHAMA NO ZAP
          </GreenButton>
        ) : (
          <GreenButton disabled={isDisabled()} onClick={handleFoward}>
            AVANÇAR
          </GreenButton>
        )}
        {step >= 2 && (
          <button onClick={resetSimulation} className="btn-simulation">
            Refazer simulação
          </button>
        )}
      </div>
      <p className="sub-title" style={{ paddingTop: 20 }}>
        *Não sabe o valor do seu FGTS? Acesse o aplicativo da Caixa{" "}
        <a
          href="https://www.caixa.gov.br/atendimento/aplicativos/fgts/Paginas/default.aspx#video"
          target="_blank"
          rel="noreferrer"
        >
          aqui
        </a>
        .
      </p>
    </div>
  );
};

export default FgtsWidraw;
