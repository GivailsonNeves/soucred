import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import List from "../list/view";

import "./styles.scss";

export type InfoCardProps = {
  title: string;
  miniTitle?: string;
  middle: string;
  data?:string[];
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  miniTitle,
  middle,
  data,
}) => {

  const [_, i18n] = useTranslation();

  return (
    <div className="info-card">
      <h4 className="title">{title}</h4>
      <h5 className="mini-title">{miniTitle}</h5>
      <h5 className="middle">{middle}</h5>
      {data ? <List data={data} /> : <></>}
      <Button>CHAMA NO ZAP</Button>
    </div>
  );
};
export default InfoCard;
