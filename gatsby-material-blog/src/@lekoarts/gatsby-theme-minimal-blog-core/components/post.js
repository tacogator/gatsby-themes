import React from "react"
import Post from "../../../components/Post"

export default function ({ data }) {
  const { post } = data
  return <Post data={{ ...data, post }} />
}
