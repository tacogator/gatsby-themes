import React from "react"
import Homepage from "../../../components/Homepage"

export default ({ data }) => {
  const { allPost } = data
  console.log("plugin homepage")
  return <Homepage posts={allPost.nodes} />
}
