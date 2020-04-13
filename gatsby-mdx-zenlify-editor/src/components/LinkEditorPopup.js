import React, { useEffect, useState } from "react"
import { ReactEditor, useSlate } from "slate-react"
import { Editor, Range } from "slate"

import { TextField, withStyles } from "@material-ui/core"

import ModalDialog from "./ModalDialog"
import {
  insertLink,
  get_link_node,
  update_link,
  unwrapLink,
  move_cursor
} from "../utils/LinkHelpers"
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

export default function LinkEditorPopup({ editor, linkState, setOpen }) {
  const actions = {
    primary: {
      label: "Remove",
      action: () => {
        move_cursor(editor, linkNode)
        unwrapLink(editor)
        handleClose()
      },
    },
    secondary: {
      label: "Update",
      action: () => {
        update_link(editor, linkNode, link)
        //move_cursor(editor, linkNode)
        handleClose()
      },
    },
  }

  const [link, setLink] = useState("")
  const [linkNode, setLinkNode] = useState()
  useEffect(() => {
    const [open, url] = linkState
    const initialLink = get_link_node(editor)
    console.log (
      "initial link", initialLink
    )
    if (open && !initialLink) {
      handleClose()
      return
    }
    if (open) {
      setLink(initialLink[0].url)
      setLinkNode(initialLink[1])
    }
  }, [linkState])

  const handleClose = () => {
    setOpen([false, ""])
    ReactEditor.focus(editor)
  }

  const [open] = linkState

  return (
    <ModalDialog
      title="Edit link"
      open={open}
      setOpen={handleClose}
      actions={actions}
    >
      <TextField
      autoFocus
        fullWidth={true}
        id="link"
        label="Link"
        variant="outlined"
        value={link}
        onChange={(e)=>setLink(e.target.value)}
      />
    </ModalDialog>
  )
}
