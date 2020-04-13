import { Editor, Transforms, Range } from "slate"
import isUrl from "is-url"
import { useState } from "react"

export const withLinks = editor => {
  const { insertData, insertText, isInline, onKeyDown } = editor

  editor.isInline = element => {
    return element.type === "link" ? true : isInline(element)
  }

  editor.insertText = text => {
    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertText(text)
    }
  }

  editor.insertData = data => {
    const text = data.getData("text/plain")

    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}

export const insertLink = (editor, url) => {
  console.log("#insertLink ", editor)
  if (editor.selection) {
    wrapLink(editor, url)
  }
}

export const isLinkActive = editor => {
  const [link] = Array.from(
    Editor.nodes(editor, { match: n => n.type === "link" })
  )
  //console.log("# isLinkActive  ", link)
  return !!link
}

export const unwrapLink = editor => {
  Transforms.unwrapNodes(editor, { match: n => n.type === "link" })
}

const wrapLink = (editor, url) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor)
  }

  const { selection } = editor
  const isCollapsed = selection && Range.isCollapsed(selection)
  const link = {
    type: "link",
    url,
    children: isCollapsed ? [{ text: url }] : [],
  }

  console.log("# insert Link  ", isCollapsed, editor, link)
  if (isCollapsed) {
    Transforms.insertNodes(editor, link)
  } else {
    Transforms.wrapNodes(editor, link, { split: true })
    Transforms.collapse(editor, { edge: "end" })
  }
}

export const get_link_node = editor => {
  const [entry] = Array.from(
    Editor.nodes(editor, { match: n => n.type === "link" })
  )
  //const node = entry && entry[1] ? link[1] : undefined
  return entry
}

export const update_link = (editor, path, newLink) => {
  Transforms.setNodes(editor, { url: newLink }, {at: path})
}


export const move_cursor = (editor, path) => {
  Transforms.select(editor, path);

}