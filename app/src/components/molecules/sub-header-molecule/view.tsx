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
        {subTitle && <p>{subTitle}</p>}
        {subTitle2 && <p>{subTitle2}</p>}
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default SubHeaderMolecule;
