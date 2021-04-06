module.exports = {
  siteMetadata: {
    title: "astropond - Angela Kochoska",
    author: "Angela Kochoska",
    description: "A personal website (based on Gatsby.js Forty template starter by Hunter Chang)"
  },
  pathPrefix: `/astropond`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/astropond_logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

