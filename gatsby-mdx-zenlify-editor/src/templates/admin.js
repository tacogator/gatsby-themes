import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Container, Box, Button, Typography } from "@material-ui/core";
import path from "path";

import BearAppBar, { SlimToolbar } from "../components/widgets/BearAppBar";
import MainMenu from "../components/MainMenu";
import { Post } from "../components/Dashboard";

export default function Admin({ pageContext }) {
  const { posts } = pageContext;
  return (
    <>
      <BearAppBar rightMenu={<MainMenu />}>
        <SlimToolbar></SlimToolbar>
      </BearAppBar>
      <Container maxWidth="md" style={{ paddingTop: "150px" }}>
        <Box paddingBottom="2rem" display="flex" justifyContent="space-between">
          <Typography variant="h2">Your posts</Typography>
          <Button
            color="secondary"
            variant="outlined"
            // startIcon={<Create />}
            aria-label="write new"
            component={Link}
            to="/editor"
            state={{ isNew: true, type: "post" }}
          >
            Write a new post
          </Button>
        </Box>
        {posts && <AllPosts list={posts} />}
      </Container>
    </>
  );
}

const AllPosts = ({ list }) => {
  return list.map((post) => <Post key={post.slug} {...post} />);
};

// const ShowPost = ({ post }) => {
//   console.log("#showpost ", post);
//   const { title, description, slug, relFilename, relPath } = post;
//   return <Post post={post} />;
// };

const remove_flashes = (slug) => slug.replace(/^\/|\/$/g, "");
