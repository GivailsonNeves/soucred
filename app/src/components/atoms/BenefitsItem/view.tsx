import "./styles.scss";

export interface BenefitsItemProps {
  imgPath: string;
  title: string;
  text: string;
}

const BenefitsItem: React.FC<BenefitsItemProps> = ({
  imgPath,
  title,
  text,
}) => {
  return (
    <div className="BenefitsItem">
      <div>
        <img src={imgPath} alt={title} />
      </div>
      <p className="title">{title}:</p>
      <p>{text}</p>
    </div>
  );
};

export default BenefitsItem;
