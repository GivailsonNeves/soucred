import React from "react";
import BlogContents from "../../components/templates/BlogContents";
import Footer from "../../components/templates/Footer";
import HeaderBlog from "../../components/templates/HeaderBlog";
import Share from "../../components/templates/Share";
import "./styles.scss";

export interface BlogArticleProps {}

const BlogArticle: React.FC<BlogArticleProps> = () => {
  return (
    <>
      <HeaderBlog offset={0} />
      <BlogContents />
      <Share socialLinks={{}} />
      <Footer />
    </>
  );
};

export default BlogArticle;
