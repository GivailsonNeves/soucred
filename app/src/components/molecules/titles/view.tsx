import { Button, Container, Modal } from "react-bootstrap";

import "./styles.scss";

export interface TitlesProps {
    greenTitleStyle?: object;
    greenText?: string,
    blackTitleStyle?: object;
    blackText?: string,
    subTitleStyle?: object;
    subTitleText?: string,
}

const Titles: React.FC<TitlesProps> = ({
    greenTitleStyle,
    greenText,
    blackTitleStyle,
    blackText,
    subTitleStyle,
    subTitleText,
}) => {
    return (
        <>
            <div className="titles-componte">
                    <h4 style={greenTitleStyle}>{greenText}</h4>
                    <h2 style={blackTitleStyle}>{blackText}</h2>
                    <h4 className="end" style={subTitleStyle}>{subTitleText}</h4>
            </div>
        </>
    );
}

export default Titles;