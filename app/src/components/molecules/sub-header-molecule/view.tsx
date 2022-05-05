import GreenButton from "../greenButton/view";
import "./styles.scss";

export interface SubHeaderMoleculeProps {
  // data: string[];
  title: string;
  subTitle?: string;
  subTitle2?: string;
  picture?: string;
}

const SubHeaderMolecule: React.FC<SubHeaderMoleculeProps> = ({
  title,
  subTitle,
  subTitle2,
  picture,
}) => {
  return (
    <div className="sub-header-molecule">
      <div>
        <h1>{title}</h1>
        {subTitle && (
          <p>
            <small>{subTitle}</small>
            <br />
            <br />
          </p>
        )}
        {subTitle2 && <p>{subTitle2}</p>}
        <GreenButton
          target="_blank"
          style={{ maxWidth: 250 }}
          href="https://api.whatsapp.com/send?phone=+5561996517829&text=Olá!"
        >
          CHAMA NO ZAP
        </GreenButton>
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default SubHeaderMolecule;
