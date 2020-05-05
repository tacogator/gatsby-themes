import React from "react"
import Post from "../../../components/post"

export default function ({ data }) {
  const { post } = data
  return <Post data={{ ...data, post }} />
}
