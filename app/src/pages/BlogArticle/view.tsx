import React from "react";
import { useTranslation } from "react-i18next";
import BlogContents from "../../components/templates/BlogContents";
import Footer from "../../components/templates/Footer";
import HeaderBlog from "../../components/templates/HeaderBlog";
import Share from "../../components/templates/Share";

import "./styles.scss";

export interface BlogArticleProps {}

const BlogArticle: React.FC<BlogArticleProps> = () => {
  const [t] = useTranslation();

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
