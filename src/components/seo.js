import React     from 'react';
import Helmet    from 'react-helmet';
import PropTypes from 'prop-types';

import { StaticQuery, graphql, withPrefix } from 'gatsby';

const style = `
  body { background: url('${withPrefix('/images/escheresque_ste.png')}'); }

  .nav-link.active { background-color: #212529; }

  footer {
    position: sticky;
    bottom  : 0;
  }

  footer p {
    border-top-left-radius   : 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }
`;

const SEO = ({ lang, title, desc }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}

    render={({ site }) => (
      <Helmet
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        defaultTitle={site.siteMetadata.title}
      >
        <html lang={lang} />
        <title>{title}</title>
        <style>{style}</style>
        <meta name='description'  content={desc || site.siteMetadata.description} />
        <meta property='og:type'  content='website' />
        <meta property='og:title' content={title || site.siteMetadata.title} />
        <meta property='og:description' content={desc || site.siteMetadata.description} />
        <meta name='twitter:card'    content='summary' />
        <meta name='twitter:creator' content={site.siteMetadata.author} />
        <meta name='twitter:title'   content={title || site.siteMetadata.title} />
        <meta name='twitter:description' content={desc || site.siteMetadata.description} />
      </Helmet>
    )}
  />
);

SEO.defaultProps = { lang: 'en' };

SEO.propTypes = {
  lang : PropTypes.string.isRequired,
  title: PropTypes.string,
  desc : PropTypes.string,
};

export default SEO;
