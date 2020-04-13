import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Container, Box, Button } from "@material-ui/core";
import path from "path";

import BearAppBar, { SlimToolbar } from "../components/widgets/BearAppBar";
import MainMenu from "../components/MainMenu";
import { Post } from "../components/Dashboard";

export default function Admin({ pageContext }) {
  const { posts } = pageContext;
  return (
    <>
      <BearAppBar rightMenu={<MainMenu />}>
        <SlimToolbar>
          <Box display="flex" fontWeight="600">
            Dashboard
          </Box>
        </SlimToolbar>
      </BearAppBar>
      <Container maxWidth="md" style={{ paddingTop: "150px" }}>
        <Box display="flex" justifyContent="flex-end">
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
