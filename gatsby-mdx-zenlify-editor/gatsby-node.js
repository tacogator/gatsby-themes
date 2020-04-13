/**
Copyright 2019 Forestry.io Inc
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const { Repo } = require("@tinacms/api-git");

const gitApi = require("@tinacms/api-git");
const fs = require("fs");
const path = require("path");

var express = require("express");

exports.onCreateDevServer = (props, options) => {
  const { app, store } = props;
  const { program } = store.getState();

  console.log("# createDevServer   ");
  const { pathToRepo, pathToContent, ...routerOptions } = options;

  const repo = new Repo(
    pathToRepo ? pathToRepo : program.directory,
    pathToContent ? pathToContent : "content"
  );
  repo.pathToContent = "content";
  repo.pathToRepo = program.directory;

  app.use("/___tina", gitApi.router(repo, routerOptions));
  console.log("# Git repo: ", repo);

  app.use(
    "/___assets",
    express.static(path.join(program.directory, "content", "posts"))
  );
};

exports.createPages = async (props) => {
  const { graphql, actions, store } = props;
  const { program } = store.getState();

  //TODO write query independent of other plugins
  const dashboardQuery = await graphql(`
    {
      allPost {
        edges {
          node {
            date
            description
            slug
            title
            ... on MdxPost {
              parent {
                ... on Mdx {
                  fileAbsolutePath
                }
              }
            }
          }
        }
      }
    }
  `);

  if (dashboardQuery.errors) {
    reporter.panic(result.errors);
  }

  const dashboardTemplate = require.resolve("./src/templates/admin.js");
  //TODO: get path from option
  const basePath = "/";
  const posts = dashboardQuery.data.allPost.edges.map(({ node }) => {
    const post = {
      ...node,
      relPath: path.join(
        "posts",
        path.basename(path.parse(node.parent.fileAbsolutePath).dir)
      ),
      relFilename: path.basename(node.parent.fileAbsolutePath),
    };
    delete post.parent;
    return post;
  });

  console.log("# gen dashboard");

  actions.createPage({
    posts: posts,
    path: path.join(basePath, "admin"),
    component: dashboardTemplate,
    context: {
      posts: posts,
    },
  });

  const result = await graphql(`
    {
      allPost {
        edges {
          node {
            date
            description
            slug
            title
            ... on MdxPost {
              parent {
                ... on Mdx {
                  rawBody
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  // const posts = result.data.allPost.edges;
  // posts.forEach(({ node }) => {
  //   if (!node.slug) {
  //     return;
  //   }
  //   const publicPath = path.join(
  //     program.directory,
  //     "public",
  //     "page-data",
  //     node.slug,
  //     "raw-markdown.json"
  //   );
  //   fs.writeFile(publicPath, node.parent.rawBody, function(err) {
  //     if (err) throw err;
  //     //console.log("generated ", slug);
  //   });
  //   //console.log(node.title, node.parent.rawBody)
  // });
};
