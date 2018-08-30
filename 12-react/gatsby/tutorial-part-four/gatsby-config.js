module.exports = {
  siteMetadata: {
    title: 'Nonsense Fake Title'
  },
  plugins: [
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
};
