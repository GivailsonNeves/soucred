import { Container } from "react-bootstrap";
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
            extensões.
          </p>
          <p>
            Atendimento disponível de segunda a sexta das 8h às 18h pelo
            telefone (61) 99651 7829.
          </p>
          <p>
            Somos um correspondente bancário, atividade regulada pelo Banco
            Central do Brasil, das seguintes instituições financeiras: AGIBANK
            (CNPJ 10.664.513/0001-50), BARISUL (CNPJ 92.702.067/0001-96), BMG
            (CNPJ 61.186.680/0001-74), BANCO SAFRA (CNPJ 58.160.789/0001-28),
            BANCO OLÉ (SANTANDER) (CNPJ 71.371.686/0001-85), BRADESCO
            FINANCIAMENTOS (CNPJ 07.207.996/0001-50), BANCO MERCATIL (CNPJ
            17.184.037/0001-10), BANCO CETELEM (CNPJ 00.558.456/0001-71), CREFAZ
            (CNPJ 18.188.384/0001-83), C6 BANK (CNPJ 31.872.495/0001-72),
            DAYCOVAL (CNPJ 62.232.889/0001-90), DIONOU (CNPJ ??????), FACTA
            (CNPJ 15.581.638/0001-30), ITAU CONSIG (CNPJ 33.885.724/0001-19) e
            PANAMERICANO (CNPJ 59.285.411/0001-13).
          </p>
          <p>
            Crédito pessoal e consignado: As taxas de juros e prazos praticados
            nessas modalidades seguem as determinações particulares de cada
            convênio, assim como os termos e políticas vigentes no ato da
            contratação. Todos os valores e taxas mencionados tratam-se de
            simulações, podendo variar no momento da contratação do crédito.
          </p>
          <p>
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
            <a href="/politica">Política de privacidade</a>
            <span></span>
            <a href="/termos">Termos de uso</a>
          </div>
          <img src={logo} alt={t("general.appName")} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
