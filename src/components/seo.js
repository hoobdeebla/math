import React     from 'react';
import PropTypes from 'prop-types';
import Helmet    from 'react-helmet';

import { useStaticQuery, graphql, withPrefix } from 'gatsby';

const SEO = ({ lang, meta, title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaArray       = meta        || [];
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      style={[{ cssText: `body { background: url('${withPrefix('/images/escheresque_ste.png')}') }` }]}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
      meta={[
        {
          name   : 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content : title,
        },
        {
          property: 'og:description',
          content : metaDescription,
        },
        {
          property: 'og:type',
          content : 'website',
        },
        {
          name   : 'twitter:card',
          content: 'summary',
        },
        {
          name   : 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name   : 'twitter:title',
          content: title,
        },
        {
          name   : 'twitter:description',
          content: metaDescription,
        },
      ].concat(metaArray)}
    />
  );
};

SEO.defaultProps = { lang: 'en' };

SEO.propTypes = {
  lang       : PropTypes.string.isRequired,
  meta       : PropTypes.arrayOf(PropTypes.object),
  title      : PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
