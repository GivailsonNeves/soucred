import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArticleData } from "../../../models/article-data";
import BoxHover from "../../atoms/box-hover";
import "./styles.scss";

export interface BlogItemProps extends ArticleData {}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  subTitle,
  postData,
  articlePhoto,
  slug,
}) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="BlogItem">
        <BoxHover>
          <Card.Img variant="top" src={articlePhoto} />
        </BoxHover>
        <Card.Body>
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <small>{postData}</small>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BlogItem;
