import React from "react"

import Listing from "./Listing";

import Hero from "../shadow/hero"
export default function Homepage({ posts }) {
  console.log(posts)
  return (
    <div>
      <div>
        <Hero />
      </div>
      <Listing posts={posts} showTags={false} />
    </div>
  )
}
