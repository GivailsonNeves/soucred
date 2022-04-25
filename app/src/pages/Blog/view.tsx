import React from "react";
import { useTranslation } from "react-i18next";
import BlogContents from "../../components/templates/BlogContents";
import Footer from "../../components/templates/Footer";
import HeaderBlog from "../../components/templates/HeaderBlog";
import Share from "../../components/templates/Share";

import "./styles.scss";

export interface BlogViewProps { }

const Blog: React.FC<BlogViewProps> = () => {
  const [t] = useTranslation();

  return (
    <>
      <HeaderBlog offset={0} />
      <BlogContents />
      <Share />
      <Footer />
    </>
  );
};

export default Blog;
