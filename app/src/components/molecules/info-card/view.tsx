import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./styles.scss";

export type InfoCardProps = {
  title: string;
  miniTitle?: string;
  middle: string;
  secondMiddle?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  miniTitle,
  middle,
  secondMiddle,
}) => {

  const [_, i18n] = useTranslation();

  return (
    <div className="info-card">
      <p className="title">{title}</p>
      <p className="mini-title">{miniTitle}</p>
      <p className="middle">{middle}</p>
      <p className="second-middle">{secondMiddle}</p>
      <Button>CHAMA NO ZAP</Button>
    </div>
  );
};
export default InfoCard;
