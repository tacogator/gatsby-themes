<h1 align="center">
  @tacogator/gatsby-theme-material-clarisse-blog
</h1>

Launch a new blog with Clarisse template. Responsive design and minimalist styling.  Suitable for long-form content or personal blog.

Built with Material-UI.

## ✿ Installation

1. **Create a fresh blog from scratch**

    Use the Gatsby CLI to create a new blog site, specifying Clarisse template as the starter.

    ```shell
    # create a new Gatsby site using Clarisse starter
    gatsby new my-cool-blog https://github.com/tacogator/gatsby-themes/gatsby-starter-blog-material-clarisse
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-cool-blog/
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!


## ☕️ Add Clarisse to existing Gatsby project: 

Alternatively, you can add Clarisse theme to an existing Gatsby project.

```shell
# Install the theme
yarn add @tacogator/gatsby-theme-blog-material-clarisse

```

Add theme to gatsby-config.js

```shell
plugin: [
  ...
  `gatsby-theme-material-clarisse-blog`,
  ...
]

```

## Directory structue

Clarisse theme follows the standard Gatsby project layout. 

An example blog project:

    .
    ├── ...
    ├── static
    ├── content
        ├── pages    // Static pages
                └── about              
                    ├── index.mdx
                    └── some-photo.jpg

        └── posts    // One dir per article
                └── article-about-sour-dough-bread   
                    ├── index.mdx
                    └── sourdough.jpg
    |                
    ├── src
         ├── @tacogator
                     └── gatsby-theme-blog-material-clarisse  
                             ├── components
                                    └── theme.js   // Override default theme with your own
         ├── your-own-component.js  
         
                                
    └── gatsby-config.js  
    

1.  **`/content/pages`**: This directory contains all of the static pages.  One dir per page.

2.  **`/content/posts`**: This directory will contain all of the ariticles.  One dir per article.  Put photos in the dir.

3.  **`src`**: This directory contains your own custom pages or components.  If you wish to override any Clarisse's components, please them in `src/@tacogator/gatsby-theme-blog-material-clarisse`.

4.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
