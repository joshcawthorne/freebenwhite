/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

import "./layout.css";

const OuterContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #19213a;
  color: #fff;
`;

const FooterOuter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #19213a;
  color: #fff;
`;

const Footer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  max-width: 1400px;
  width: 100%;
  font-size: 12px;
  color: #fff;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
`;

const FooterLine = styled.div`
  width: 100%;
`;

const Attribution = styled.a`
  font-family: "Noto Sans TC", sans-serif;
  text-decoration: none;
  margin-left: 0px;
  color: #ffc338;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <OuterContainer>
      <main>{children}</main>
      <FooterOuter>
        <Footer>
          <FooterLine>
            Created by{" "}
            <Attribution
              href={"https://www.twitter.com/cawthornejosh"}
              target={"_blank"}
            >
              @cawthornejosh
            </Attribution>
            .
          </FooterLine>
          <FooterLine>
            <Attribution
              href={"https://creativecommons.org/licenses/by-nc-sa/2.0/uk/"}
              target={"_blank"}
            >
              Some rights reserved.
            </Attribution>
          </FooterLine>
        </Footer>
      </FooterOuter>
    </OuterContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
