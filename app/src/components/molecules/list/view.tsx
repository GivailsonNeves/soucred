import "./styles.scss";

export interface ListProps {
    data: string[];
}

const List: React.FC<ListProps> = ({ data }) => {
    return (
        <div className="list">
            {data.map((text) => {
                return <p className="second-middle-list">{text}</p>
            })}
        </div>
    );
}

export default List;