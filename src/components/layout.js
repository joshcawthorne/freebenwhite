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
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #19213a;
  color: #fff;
  padding: 10px 0px;
`;

const Footer = styled(motion.div)`
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

const FooterLine = styled(motion.div)`
  width: 100%;
`;

const Attribution = styled.a`
  font-family: "Noto Sans TC", sans-serif;
  text-decoration: none;
  margin-left: 0px;
  color: #ffc338;
`;

const FooterAnim1 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      duration: 0.2,
    },
  },
};

const FooterAnim2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.55,
      duration: 0.2,
    },
  },
};

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
      <Helmet>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js"
        ></script>
      </Helmet>
      <main>{children}</main>
      <FooterOuter>
        <Footer>
          <FooterLine
            initial="hidden"
            animate={"visible"}
            variants={FooterAnim1}
          >
            Created by{" "}
            <Attribution
              href={"https://www.twitter.com/cawthornejosh"}
              target={"_blank"}
            >
              @cawthornejosh
            </Attribution>
            .
          </FooterLine>
          <FooterLine
            initial="hidden"
            animate={"visible"}
            variants={FooterAnim2}
          >
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
