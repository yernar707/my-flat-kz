require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `MYFLAT.KZ`,
    description: `Недвижимость в Турции`,
    author: `Yernar Yergaziyev https://github.com/yernar707`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:400,500,600,700`,
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `complexes`,
        path: `${__dirname}/src/complexes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `smi`,
        path: `${__dirname}/src/smi`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/bg`, // wherever background images are stored
      },
    },
    {
    	resolve: `gatsby-source-graphcms`,
    	options: {
    		endpoint: `https://api-ap-south-1.graphcms.com/v2/cl2hdu51w41ef01z625ez3rdh/master`,
        token: process.env.API_KEY,
    	}
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://my--flat.herokuapp.com/api/v1/house/list/',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-trigger-deploy`,
      options: {
        secretKey: 'myFlatKzDeploySecretKey',
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}