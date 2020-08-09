/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import sharingImg from "../images/logo.jpg";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <Helment>
        <meta name="twitter:image" content={sharingImg}></meta>
      </Helment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={"Free Ben White"}
        meta={[
          { name: `og:image`, content: sharingImg },
          {
            name: `description`,
            content:
              "Help free Ben White from his captors in the South Coast of England.",
          },
          {
            property: `og:title`,
            content: `Free Ben White`,
          },
          {
            property: `og:description`,
            content: `Help free Ben White from his captors in the South Coast of England.`,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          { name: `twitter:image`, content: sharingImg },
          { name: `image`, content: sharingImg },
          { name: `og:url`, content: `https://www.freebenwhite.com` },
        ].concat(meta)}
      />
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
