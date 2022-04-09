import "./styles.scss";

export interface SubHeaderMoleculeProps {
    // data: string[];
    title: string;
    subTitle?: string;
    subTitle2?: string;
    baseTitle?: string;
    picture?: string;
}

const SubHeaderMolecule: React.FC<SubHeaderMoleculeProps> = ({
    title,
    subTitle,
    subTitle2,
    baseTitle,
    picture,

}) => {
    return (
        <div className="sub-header-molecule">
            <div>
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <p >{subTitle2}</p>
                <p className="sut-title-last">{baseTitle}</p>
            </div>
            <img src={picture} alt="" />
        </div>
    );
}

export default SubHeaderMolecule;