require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `dehamzah`,
    siteTitleAlt: `Dede Hamzah`,
    siteHeadline: `Dede Hamzah - Software Engineer`,
    siteUrl: `https://dehamzah.com`,
    siteDescription: `Dede Hamzah - Software Engineer`,
    siteLanguage: `id`,
    siteImage: `/owl_emoji.jpg`,
    author: `@dehamzah`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/dehamzah`,
          },
          {
            name: `Github`,
            url: `https://www.github.com/dehamzah`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/dedehamzah`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dede Hamzah`,
        short_name: `dede-hamzah`,
        description: `Software Engineer`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `static/owl_emoji.png`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
