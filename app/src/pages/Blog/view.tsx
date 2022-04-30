import React from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import BlogHighligth from "../../components/molecules/blog-highligth";
import BlogItem from "../../components/molecules/blog-item";
import Footer from "../../components/templates/Footer";
import HeaderBlog from "../../components/templates/HeaderBlog";
import "./styles.scss";

import titlePhoto from "../../assets/images/caixaFrente.jpeg";
import { ArticleData } from "../../models/article-data";

const articleData: ArticleData = {
  title: "Título do artigo",
  subTitle: "Subtitulo do artigo",
  postData: "Hoje às 17h55 por SouCred",
  articlePhoto: titlePhoto,
  slug: "blhablah",
};

export interface BlogViewProps {}

const Blog: React.FC<BlogViewProps> = () => {
  const [t] = useTranslation();

  return (
    <section className="BlogPage">
      <HeaderBlog offset={0} />
      <Container>
        <div>
          <Row>
            <Col md={8}>
              <BlogHighligth {...articleData} />
            </Col>
            <Col md={4}>
              <BlogItem {...articleData} />
            </Col>
          </Row>
          <Row>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Col md={4}>
                <BlogItem {...articleData} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="pagination-area">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default Blog;
