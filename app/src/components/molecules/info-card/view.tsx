import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GreenButton from "../greenButton/view";
import List from "../list/view";

import "./styles.scss";

export type InfoCardProps = {
  title: string;
  miniTitle?: string;
  middle: string;
  secondMiddle?: string;
  data?:string[];
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  miniTitle,
  middle,
  secondMiddle,
  data,
}) => {

  const [_, i18n] = useTranslation();

  return (
    <div className="info-card">
      <h4 className="title">{title}</h4>
      <h5 className="mini-title">{miniTitle}</h5>
      <h5 className="middle">{middle}</h5>
      <h5 className="seconds-middle">{secondMiddle}</h5>
      {data ? <List data={data} /> : <></>}
      <GreenButton>CHAMA NO ZAP</GreenButton>
    </div>
  );
};
export default InfoCard;
