import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { UtilsNavigator } from "../../../utils";
import GreenButton from "../greenButton/view";
import List from "../list/view";
import "./styles.scss";

export type InfoCardProps = {
  title: string;
  miniTitle?: string;
  middle: string;
  secondMiddle?: string;
  data?: string[];
  link?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  miniTitle,
  middle,
  secondMiddle,
  data,
  link,
}) => {
  const [_, i18n] = useTranslation();

  return (
    <div className="info-card">
      {link ? (
        <h4 className="title">
          <Link onClick={() => UtilsNavigator.gotoTop()} to={`${link}`}>
            {title}
          </Link>{" "}
        </h4>
      ) : (
        <h4 className="title">{title}</h4>
      )}
      <h5 className="mini-title">{miniTitle}</h5>
      <h5 className="middle">{middle}</h5>
      <h5 className="seconds-middle">{secondMiddle}</h5>
      {data ? <List data={data} /> : <></>}
      <div className="controls">
        <GreenButton
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+5561996517829"
        >
          CHAMA NO ZAP
        </GreenButton>
      </div>
    </div>
  );
};
export default InfoCard;
