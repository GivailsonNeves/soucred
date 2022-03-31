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
            <Container className="titles">
                <div>
                    <p style={greenTitleStyle}>{greenText}</p>
                    <p className="quite" style={blackTitleStyle}>{blackText}</p>
                    <p className="end" style={subTitleStyle}>{subTitleText}</p>
                </div>
            </Container>
        </>
    );
}

export default Titles;