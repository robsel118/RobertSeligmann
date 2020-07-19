module.exports = {
  siteMetadata: {
    title: `Robert Lee Seligmann - Software Developer`,
    description: `I am a software developer open for new opportunities. My passion is building simple and beautiful user experiences.`,
    author: `@robsel118`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archive`,
        path: `${__dirname}/content/archive`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `intro`,
        path: `${__dirname}/content/intro`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured`,
        path: `${__dirname}/content/featured`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `${__dirname}/content/resume/jobs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `educations`,
        path: `${__dirname}/content/resume/educations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `extras`,
        path: `${__dirname}/content/resume/extras`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/content/resume/skills`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.4,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
