require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Stoq Tecnologia`,
    description: `Stoq Tecnologia`,
    siteUrl: process.env.SITE_URL,
    logo: `logo.png`,
    copyright: `© 2020 Stoq Tecnologia. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
    ]
  },
  plugins: [`gatsby-theme-flex`]
}
