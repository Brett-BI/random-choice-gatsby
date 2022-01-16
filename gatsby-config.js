require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Random Choice",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
      },
    }, 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'none',
              theme: 'material',
              lineNumbers: true
            } // nord, lucario, material
          }
        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    }
  ],
};
