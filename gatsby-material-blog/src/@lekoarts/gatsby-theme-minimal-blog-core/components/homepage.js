import React from "react"
import Homepage from "../../../components/Homepage"

export default ({ data }) => {
  const { allPost } = data
  return <Homepage posts={allPost.nodes} />
}
