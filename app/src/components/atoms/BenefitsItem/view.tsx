import "./styles.scss";

interface BenefitsItemProps {
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
      <img src={imgPath} alt={title} />
      <p className="title">{title}:</p>
      <p>{text}</p>
    </div>
  );
};

export default BenefitsItem;
