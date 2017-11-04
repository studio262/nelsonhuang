module.exports = {
  siteMetadata: {
    title: `Nelson Huang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `t42pla3wg3r1`,
        accessToken: `26a70eca9888a586dbed0116f85964fdcd6afbf3ed744a0780503029b4f726bf`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-netlify`
  ],
}
