module.exports = {
  siteMetadata: {
    title      : 'Math Toolbelt',
    description: 'Helpful math tools based on high school math concepts',
    author     : 'Adam Schay (https://github.com/hoobdeebla) and Matthew Martori (https://github.com/matttt)',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name            : 'Math Toolbelt',
        start_url       : '/',
        background_color: '#313131',
        theme_color     : '#313131',
        display         : 'standalone',
        icon            : 'static/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
