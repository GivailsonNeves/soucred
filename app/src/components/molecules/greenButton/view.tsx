import { Button, ButtonProps } from "react-bootstrap";

import "./styles.scss";

export interface GreenButtonProps extends ButtonProps {
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
  ...props
}) => {
  const classes = ["green-button"];
  if (bold) classes.push("bold");

  return (
    <Button
      className={classes.join(" ")}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GreenButton;
