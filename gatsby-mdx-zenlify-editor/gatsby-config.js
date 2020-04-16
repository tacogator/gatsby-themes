const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["/___tina /**"] },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    }
  ],
};
