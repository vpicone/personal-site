import React from "react";
// import { Link, StaticQuery, graphql } from "gatsby";
import Nav from "../components/nav";
import Layout from "../components/layout";
import Listing from "../components/listing";
import SEO from "../components/seo";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog" />
    <Nav home={false} />
    <Listing />
  </Layout>
);

export default IndexPage;
