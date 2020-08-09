import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #19213a;
  color: #fff;
  text-align: center;
  @media (max-width: 768px) {
    height: 100%;
    min-height: 100vh;
    min-height: webkit-fill-available;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
    </Container>
  </Layout>
);

export default NotFoundPage;
