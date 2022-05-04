import "./styles.scss";

export interface ListProps {
  data: string[];
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className="list">
      {data.map((text, index) => {
        return (
          <p key={index} className="second-middle-list">
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default List;
