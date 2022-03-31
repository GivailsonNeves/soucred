import { Button, Container, Modal } from "react-bootstrap";

import "./styles.scss";

export interface GreenButtonProps {
    title?: string;
    style?: object;
    onClick?: any;
}

const GreenButton: React.FC<GreenButtonProps> = ({
    title,
    style,
    onClick
}) => {
    return (
        <Container className="green-button">
            <Button style={style}
                onClick={onClick}
            >
                {title ? title : "CHAMA NO ZAP"}
            </Button>
        </Container>
    );
}

export default GreenButton;