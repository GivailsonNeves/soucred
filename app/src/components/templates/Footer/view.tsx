import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import logo from "../,,/../../../assets/images/2_logo.png";

import "./styles.scss";

export interface FooterProps {
  socialLinks: any;
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const [t] = useTranslation();

  return (
    <footer>
      <Container>
        <div className="call">
          <p>
            Este site é operado, mantido e de inteira propriedade da SouCred
            Ltda., inscrita no CNPJ n° 39.581.101/0001-39, sediada em
            Brasília-DF, SHIS QI 21, comércio local, bloco A, sala 204 – Lago
            Sul, e está hospedado com o endereço www.eusoucred.com.br e suas
            extensões. Atendimento disponível de segunda a sexta das 8h às 18h
            pelo telefone (61) 99651 7829. Somos um correspondente bancário,
            atividade regulada pelo Banco Central do Brasil, das seguintes
            instituições financeiras:
          </p>
          <p>
            Crédito pessoal e consignado: As taxas de juros e prazos praticados
            nessas modalidades seguem as determinações particulares de cada
            convênio, assim como os termos e políticas vigentes no ato da
            contratação. Todos os valores e taxas mencionados tratam-se de
            simulações, podendo variar no momento da contratação do crédito.
            Antecipação saque-aniversário FGTS: Trata-se da antecipação de
            recursos financeiros utilizando o saldo do FGTS como garantia. As
            parcelas serão debitadas anualmente, no mês em que seria efetuado o
            saque aniversário, diretamente na conta vinculada ao FGTS. Todos os
            valores e taxas mencionados tratam-se de simulações, podendo variar
            no momento da contratação do crédito.
          </p>
        </div>
        <div className="links">
          <div>
            <a href="#">Política de privacidade</a>
            <span></span>
            <a href="#">Termos de uso</a>
          </div>
          <img src={logo} alt={t("general.appName")} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
