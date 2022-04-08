import "./styles.scss";

export interface ExplicationProps {
    picture: string;
    title: string;
}

const Explication: React.FC<ExplicationProps> = ({
    picture,
    title,
}) => {

    return (
        <div className="explication">
            <img src={picture} />
            <h2>{title}</h2>
        </div>
    );
}

export default Explication;