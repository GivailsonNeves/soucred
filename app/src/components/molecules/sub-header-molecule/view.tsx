import { useTranslation } from "react-i18next";
import "./styles.scss";

export interface SubHeaderMoleculeProps {
    title?: string;
    subTitle?: string;
    baseTitle?: string;
    picture?: string;
}

const SubHeaderMolecule: React.FC<SubHeaderMoleculeProps> = ({
    title,
    subTitle,
    baseTitle,
    picture,
}) => {
    const [t] = useTranslation();

    return (
        <>
            <div className="sub-header-molecules">
                <div>
                    <h1>{title}</h1>
                    <h4>{subTitle}</h4>
                    <h4>{baseTitle}</h4>
                </div>
                <img src={picture} alt={t("general.appName")} />
            </div>
        </>
    );
}

export default SubHeaderMolecule;