import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { GitClient } from "@tinacms/git-client";

import matter from "gray-matter";
import path from "path";

import CoolEditor from "../components/CoolEditor";
import {
  new_draft,
  gen_slug_from,
  random_slug,
} from "../components/slate-utils";

const gitClient = new GitClient("http://localhost:8000/___tina");

export default function Editor({ location }) {
  const [filename, isNew, baseDir] = get_slug(location);
  if (isNew) {
    console.log("slug doesn't exist. reload page");
    navigate(`editor?p=${filename}`, { replace: true });
  }
  const [loading, setLoading] = useState(false);
  const [pageData, setData] = useState(new_draft(filename));
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await gitClient.show(path.join(filename,"index.mdx"));
        const m = matter(result.content);

        if (!m.isEmpty) {
          const { data: frontmatter, content: rawMarkdownBody } = m;
          // we already have a slug - this call simply strips off leading and trailing slash
          if (!frontmatter.slug) {
            frontmatter.slug = path.basename(filename)
          } 
          //frontmatter.slug = gen_slug_from(frontmatter.slug);
          setData({ frontmatter, body: rawMarkdownBody });
        } else {
          setError(true);
          console.log("#Error parsing post ");
        }
      } catch (error) {
        setError(true);
        console.log("#Error reading file ", error);
      } finally {
        setLoading(false);
      }
    };
    !isNew && fetchData();
  }, []);

  const makePath = (slug) => path.join(baseDir, slug);

  const onSave = async ({ frontmatter, body, whole_document }) => {
    const newFilename = makePath(frontmatter.slug);
    const slug_has_changed = filename !== newFilename || false;
    // if (slug_has_changed) {
    //   console.log("existing slug renamed - delete old one");
    //   await gitClient.deleteFromDisk({
    //     relPath: path.join(filename, "index.mdx"),
    //   });
    // }

    console.log("writing file to disk");
    try {
      // await gitClient.writeToDisk({
      //   fileRelativePath: path.join(filename, "index.mdx"),
      //   content: whole_document,
      // });
      if (slug_has_changed) {
        // console.log("Slug changed - reloading page");
        // navigate(`./editor?p=${newFilename}`, { replace: true });
      } else {
        console.log("Slug not changed - updating current doc");

        setData({ frontmatter, body });
      }
    } catch (error) {}
  };

  return (
    <div>
      {loading && <div>loading ...</div>}
      {error && <div>error occurred while loading post</div>}
      {!loading && <CoolEditor basePath={filename} pageData={pageData} onSave={onSave} />}
    </div>
  );
}

/**
 * Get page slug from url. Return a randomly generate slug and set isNew to true
 * @param location page context location
 */
const get_slug = (location) => {
  const params = new URLSearchParams(location.search);
  if (params.has("p")) {
    return [params.get("p"), false, "posts"];
  } else {
    return [path.join("posts", random_slug()), true, "posts"];
  }
};

const parse_md = (md) => {};
