import { Button, Container, Modal } from "react-bootstrap";

import "./styles.scss";

export interface GreenButtonProps {
  style?: object;
  onClick?: any;
  children: any;
  bold?: boolean;
}

const GreenButton: React.FC<GreenButtonProps> = ({
  style,
  onClick,
  children,
  bold,
}) => {
  const classes = ["green-button"];
  if (bold) classes.push("bold");

  return (
    <Button className={classes.join(" ")} style={style} onClick={onClick}>
      {children}
    </Button>
  );
};

export default GreenButton;
