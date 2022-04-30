import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArticleData } from "../../../models/article-data";
import BoxHover from "../../atoms/box-hover";

import "./styles.scss";

export interface BlogHighLigthProps extends ArticleData {}

const BlogHighLigth: React.FC<BlogHighLigthProps> = ({
  articlePhoto,
  slug,
  ...props
}) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="BlogHighLigth">
        <BoxHover {...props}>
          <Card.Img variant="top" src={articlePhoto} />
        </BoxHover>
      </Card>
    </Link>
  );
};

export default BlogHighLigth;
